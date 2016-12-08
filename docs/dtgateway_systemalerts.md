DT Gateway System Alerts
========================
The DT Gateway also allows users to monitor applications and set different conditions using JavaScript to receive alerts when conditions become true. The users are alerted by email. This conditions can be arbitrary JavaScript expressions applied on topic values such as system metrics, application metrics, and custom application counters. Also, these JavaScript conditions can be simple to complex multiline which user can set on metrics, to be alerted during anomalous behavior.

## Alerts & Topics

As described above the alerts can be set on any metrics. When the alert condition evaluates to true and remains so for a specified time duration, the alert becomes active and email is sent. When the condition is no longer true the alert becomes inactive and another email about the state change is sent. 
Here is an example for simple JavaScript condition. one can issue the REST request to create an alert named “xyz” which emails to someone@company.com when the number of running applications is greater than 5 for at least 60 seconds.

### PUT /ws/v2/systemAlerts/alerts/xyz
```json
{
  "condition":"_topic['cluster.metrics'].numAppsRunning > 5",
  "email":"someone@company.com",
  "description": "No.of apps running is more than 5",
  "timeThresholdMillis":"60000"
}
```
When the number of running applications is greater than 5 for more than 60 seconds, a simple email will be sent to someone@company.com, stating that the alert is in effect, and when the number of running applications drops below 6, another email will be sent to someone@company.com, stating that the alert is no longer in effect.

In the condition, specified using JavaScript, one can refer to various system or application-specific values. These values are available as fields of JavaScript objects obtained by using expressions of the form `_topic[<topic_name>]`. 
The topic names can be looked up using the **GET /ws/v2/systemAlerts/topicData** REST API call shown below:

Note: Alert names may contain special characters such as spaces, slashes and percents. However, they must be URL encoded before making the REST API calls. (ex: Get,Put,Delete)

### GET /ws/v2/systemAlerts/topicData 
```json
{
  -"applications.<applicationId>.logicalOperators": {...}, 
  -"applications.<applicationId>.physicalOperators": {...}, 
  -"applications.<applicationId>.containers": {...}, 
  -"applications.<applicationId>": {...}
  -"cluster.metrics": {...},
  -"applications": {...}
}
```
where **`<applicationId>`** refers to the application id of a running application. These topic repeat for every running applications. The alert condition can refer to multiple such topic values and can be any valid JavaScript expressions that return a boolean. The email can be sent to multiple addresses separated by a comma.

## Managing and viewing alerts

From the Gateway REST API, you can do the following operations
* Creating an alert 
* Deleting an alert
* Alerts history
* Viewing the content and the status of alerts
* Viewing all the current data in the `_topic` array

## Creating an alert

To create an alert, the user needs to specify the name of the alert, the alert condition, the email address the alert is emailed to and the duration in milliseconds for which the alert condition has to be true for the alert to be in effect. As explained above, in the JavaScript condition, one can refer to the values in various topics by `_topic[<topic_name>]`.  The topic values include system metrics, application metrics, and custom application counters, which one can look up using the Gateway REST API.  The alert condition can refer to multiple such topic values and can be any valid JavaScript expressions that return a boolean.  Because of that, the user can create very customized alert conditions, such as whether an application named “XYZApplication” is running, whether a certain application is allocating too many containers, etc.

**Complex JavaScript Expressions :**

For example, one can issue the REST request to create an alert named "WordCountAppNotRunning" which emails to someone@company.com and someone@company.com when the "WordCount" app is not in "Running" state for at least 60 seconds.

### PUT /ws/v2/systemAlerts/alerts/WordCountAppNotRunning
```json
{
  "condition": "_topic['applications.application_1480063135007_0543']['state'] != 'RUNNING'",
  "email":"someone@company.com, someone@company.com",
  "description": "WordCount Application is not running",
  "timeThresholdMillis":"60000"
}
```
The above alert is valid for that current running session of "WordCount" application. However, when "WordCount" application is restarted, a new application id is generated. Then, the above alert is obsolete. One solution is user can update the application id in the condition every time application restarts or we can write a complex JavaScript expression to find application id for the given application.

Let's update above alert to work every time application restarts. The JavaScript condition can replace by 

```
var alert = false;
var appId = undefined;
var appsInfo = _topic['applications'].apps;

for(i = 0; i < appsInfo.length; i++)
{
   if(appsInfo[i].name == 'WordCount')
   {
         appId = appsInfo[i].id;
         break;
   }
}
if(appId != undefined)
{
    alert  = _topic['applications.' + appId]['state']  !=  'RUNNING' ;
}
alert;
```
The complex JavaScript expressions has to compress to single line and can use any tool available, such as  [http://javascriptcompressor.com/]

### PUT /ws/v2/systemAlerts/alerts/WordCountAppNotRunning
```json
{
  "condition": "var alert=false;var appId=undefined;var appsInfo=_topic['applications'].apps;for(i=0;i<appsInfo.length;i++){if(appsInfo[i].name=='WordCount'){appId=appsInfo[i].id;break}}if(appId!=undefined){alert=_topic['applications.'+appId]['state']!='RUNNING'}alert;",
   "email":"someone@company.com, someone@company.com",
   "description": "WordCount Application is not running",
   "timeThresholdMillis":"60000"
}
```


## Deleting an alert

We can delete the alert, by web request 
**DELETE /ws/v2/systemAlerts/alerts/{name}**

## Alerts history

We can get the alerts history by making a web request

**GET /ws/v2/systemAlerts/history**
```json
{
"history": [{
    "name": "xyz",
    "inTime": "1481235199598",
    "outTime": "1481235251088",
    "message": "No.of apps running is more than 5"
},{
    "name": "checkCsvParserNotRunning",
    "inTime": "1481235251087",
    "outTime": "1481235549648",
    "message": "Application is not running"
}],
}
```
The alert history comprises a name of alert, the time the alert became active (inTime), the time the alert became inactive(outTime) and message. The alert history is obtained through the gateway. So, whenever gateway is restarted, the alerts history gets cleared. 

## Viewing the content and the status of alerts 

We can get the content and status of alerts by making a web request 

**GET /ws/v2/systemAlerts/alerts/{name}**
```json
{
 "name": "checkLatencyApp",
 "condition": "var alert=false;var appId=undefined;var appsInfo=_topic['applications'].apps;for(i=0;i<appsInfo.length;i++){if(appsInfo[i].name=='xyzApp'){appId=appsInfo[i].id;break}}if(appId!=undefined){var expTopic='applications.'+appId+'.physicalOperators';var operators=_topic[expTopic].operators;for(i=0;(i<operators.length);++i){if(operators[i].latencyMA>50){alert=true;break}}}alert;",
 "email": "someone@company.com, someone@company.com",
 "description": "checking latency > 50",
 "timeThresholdMillis": "10000",
 "alertStatus": {
   "isInAlert": true,
   "inTime": "1481264665450",
   "emailSent": true,
   "message": "checking latency > 50"
  }
}
```
The payload shows the name of alert, JavaScript condition, email addresses, description and "timeThresholdMillis" which is the duration in milliseconds for which the alert condition has to be true for the alert to be in effect.
The payload also contains information related alert status such as "isInAlert" which means that the alert is still active or not, "inTime" which represents the time the alert became active, "emailSent" as the name suggests email is sent or not, and "message" is similar to the description.

## Viewing all the current data in the `_topic` array
This section is already covered under **Alerts & Topics** .