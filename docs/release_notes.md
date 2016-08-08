DataTorrent RTS Release Notes
========================================================================================================================

Version 3.4.0 
------------------------------------------------------------------------------------------------------------------------
### Summary
Affinity rules provides a way to specify hints on how operators should be deployed in a Hadoop cluster. There are two types of rules: affinity and anti-affinity rules. Affinity rule indicates that the group of operators in the rule should be allocated together. Anti-affinity rule, the new feature in Apache Apex 3.4.0, indicates that the group of operators should be allocated separately.

This release also includes a lot of bug fixes. Please see appendix for full list. 

### dtManage
* User can restart a killed application from dtManage
* "Retrieve Ended Apps" button changes to "Hide Ended Apps" after dtManage retrieves killed apps.
* User can use mouse scroll to zoom in/out of physical DAG view

### Apache Apex 3.4.0
* Blacklist problem nodes from future container requests
* Support adding module to application using property file API.
* Ability to obtain a thread dump from a container
* RPC timeout is now configurable
* When an operator is blocked, it nows print out a warning instead of debug

### Appendix

#### Known Issues
* [SPOI-8518] - Support links from Dashboard to Application instance pages
* [SPOI-8516] - Datatorrent rpm version inconsistency
* [SPOI-8470] - Check for already existing app package should be done before uploading the whole package
* [SPOI-8436] - Documentation is needed on "How to use Transform operators in ingestion solution app package"
* [SPOI-8434] - Documentation is needed on "How to use Generic JDBC/PostgreSQL operators in ingestion solution app package"
* [SPOI-8433] - Documentation is needed on "How to use Enrichment operator in ingestion solution app package"
* [SPOI-8414] - Drop down is not shown for "Fields to copy" property of "POJO Enricher" unless output schema is not specified
* [SPOI-8352] - Warning message while restarting app should be changed
* [SPOI-8296] - "File Path" and "Output File Name" properties for HDFS File Output Operator should be clubbed together
* [SPOI-8295] - "Include Fields" parameter for "POJO Enricher" has misleading description
* [SPOI-8294] - Operator Class Name for "Delimited Parser" operator should not be "CSV Parser"
* [SPOI-8293] - File permission property is not working properly for HDFS File Output Operator
* [SPOI-8291] - Parameters on dtAssemble should be logically ordered
* [SPOI-8224] - Providing Field Infos value for JDBC POJO Input Operator is too complex
* [SPOI-8192] - Clicking on edit option for apps throws validation errors in activity panel
* [SPOI-8158] - Options to modify property values should be closer to the property name on dtAssemble canvas
* [SPOI-8144] - "Tuple Schemas" link at top right corner of dtAssemble canvas should open in new tab
* [SPOI-8143] - Tuple Schema page not available directly from Develop tab
* [SPOI-8133] - When stream is added in dtAssemble, user should be notified if schema is required
* [SPOI-8131] - Couple of parameters for Kafka Input Operator should have dropdown selection in dtAssemble
* [SPOI-8130] - Documentation for ingestion beta operators need to be improved
* [SPOI-8128] - Port names for operators are not intuitive when displayed on dtAssemble canvas
* [SPOI-8087] - JDBC input operator query should not require explicit ordering of column names
* [SPOI-8038] - Output file names for HDFS output should not contain timestamp and '.tmp' extension
* [SPOI-8522] - Unable to set role while creating user in a secure environment.  There is a workaround by create user with no role and then assign the role
* [SPOI-8523] - User can kill app even though privileges got revoked.  This applies to secure environment only.  
* [SPOI-8552] -	App Package cache throws uncaught exception when package is not found, resulting in http status 500
* [SPOI-8536] -	DT RTS gateway log floods with WARN message
* [SPOI-8535] -	Need to restart dtgateway for enabling password authentication in sandbox
* [SPOI-8534] -	README.html for sandbox contains references to 'malhar-users'
* [SPOI-8533] -	Importing 'Apache Apex Malhar Iteration Demo' throws error for 'property' tag in properties.xml
* [SPOI-8532] -	Importing packages from dtHub sometimes gives ZipException
* [SPOI-8531] -	Multiple MachineData demos are available at dtHub
* [SPOI-8524] -	Clicking on "generate new dashboard" first navigates to 'Learn' tab on the dtConsole
* [SPOI-8523] -	Users can kill the app even if privileges get revoked in secure environment
* [SPOI-8522] -	Unable to set roles while creating user in secure environment
* [SPOI-8519] -	Ingestion application on dtHub still shows 'requires Apex version' with "-incubating"
* [SPOI-8511] -	Gateway Websocket API leaks information while unauthorized
* [SPOI-8509] -	dtAssemble operator documentation shows '@link' markers
* [SPOI-8507] -	Unable to launch an AppDataTracker application imported from dtHub
* [SPOI-8491] -	UI mixes the order and ids of tuple recording ports
* [SPOI-8490] -	gateway issues in SSL enabled cluster
* [SPOI-8479] -	Uninstall does not work even though the install was successful previously
* [SPOI-8477] -	Upgrade License Opens in dtManage window, it should be in opened up in new window
* [SPOI-8476] -	Hadoop-common-tests library shouldn't be part of RTS build
* [SPOI-8474] -	On addition of huge role name, non-specific errors are shown
* [SPOI-8473] -	Gateway, console allows impractially longer user roles additions
* [SPOI-8472] -	Visually ugly error presentation
* [SPOI-8469] -	If Kerberos tickets are changed, you have to refresh whole UI
* [SPOI-8467] -	installation script provides incorrect information
* [SPOI-8432] -	JDBC input operator is failing with exception "fetching metadata"
* [SPOI-8424] -	Dedup does not honor the expiryPeriod when error tuple is introduced in between two valid tuples
* [SPOI-8422] -	Time properties for operators should have units mentioned for them
* [SPOI-8416] -	dtAssemble Can't change application name
* [SPOI-8365] -	HDFS sync app : Unable to sync 500 GB file
* [SPOI-8358] -	Uptime and latency values are very high exactly after app is launched
* [SPOI-8317] -	dtIngest 1.1.0 (Compiled against 3.2.0) can not be launched
* [SPOI-8222] -	Operator/module names under Operator Library, dtAssemble canvas and right side panel should be same
* [SPOI-8213] -	Application DAG is not displayed when clicked on app link
* [SPOI-8202] -	Unable to add custom properties while launching apps
* [SPOI-8197] -	Default values for "Field Infos" and "Bucket Manager" properties should be set appropriately
* [SPOI-7986] -	Gateway proxy feature is not working
* [SPOI-7934] -	Kafka-dedup-HDFS-solution: Ahead in time messages are lost from Dedup operator

#### Bug Fixes
* [SPOI-7939] -	Dynamic repartition causes application to hang
* [SPOI-8468] -	Can't assign roles for users in secure environment
* [SPOI-8464] -	"Disable Reporting" option on System Configuration page gives NullPointerException
* [SPOI-8024] -	Gateway is leaving behind dtcheck temp files in HDFS
* [SPOI-7640] -	Changing dashboard name in dashboard settings modal and then canceling does not revert dashboard name
* [SPOI-8077] -	Gateway logs NPE if an app master is misbehaving
* [SPOI-8046] -	Kerberos Cluster: Installation Wizard can not get past beyond Hadoop Configuration screen
* [SPOI-8055] -	Console references to dt-text-tooltip no longer produce a tool tip
* [SPOI-7898] -	Default JAAS support classes duplicated in dt-library
* [SPOI-7929] -	Update log4j.properties in the DTX/dist/install to set debug level for org.apache.apex
* [SPOI-7943] -	The demo applications fails due to numberOfBuckets is less than 1
* [SPOI-8092] -	Problems in launching jobs with authentication enabled on secure cluster
* [SPOI-7794] -	Monitor page not refreshing properly
* [SPOI-7889] -	Cannot read property 'hideBreadcrumbs' of undefined
* [SPOI-7856] -	Modify application packages dtHub import/update paths
* [SPOI-7907] -	Downloads of AppPackages result in corrupted files during local testing
* [SPOI-7971] -	After dynamic repartition application appears blocked

#### Apache Apex 3.4.0

#### New Feature
* [APEXCORE-10] - Enable non-affinity of operators per node (not containers)
* [APEXCORE-359] - Add clean-app-directories command to CLI to clean up data of terminated apps
* [APEXCORE-411] - Restart app without specifying app package

#### Improvement
* [APEXCORE-92] - Blacklist problem nodes from future container requests
* [APEXCORE-107] - Support adding module to application using property file API.
* [APEXCORE-304] - Ability to add jars to classpath in populateDAG
* [APEXCORE-328] - CLI tests should not rely on default maven repository or mvn being on the PATH
* [APEXCORE-330] - Ability to obtain a thread dump from a container
* [APEXCORE-358] - Make RPC timeout configurable
* [APEXCORE-380] - Idle time sleep time should increase from 0 to a configurable max value
* [APEXCORE-383] - Time to sleep while reservoirs are full should increase from 0 to a configurable max value
* [APEXCORE-384] - For smaller InlineStream port queue size use ArrayBlockingQueueReservoir as default
* [APEXCORE-399] - Need better debug information in stram web service filter initializer
* [APEXCORE-400] - Create documentation for security
* [APEXCORE-401] - Create a separate artifact for checkstyle and other common configurations
* [APEXCORE-407] - Adaptive SPIN_MILLIS for input operators
* [APEXCORE-409] - Document json application format
* [APEXCORE-419] - When operator is blocked, print out a warning instead of debug
* [APEXCORE-447] - Document: update AutoMetrics with AppDataTracker link

#### Bug
* [APEXCORE-130] - Throwing A Runtime Exception In Setup Causes The Operator To Block
* [APEXCORE-201] - Reported latency is wrong when a downstream operator is behind more than 1000 windows
* [APEXCORE-326] - Iteration causes problems when there are multiple streams between two operators
* [APEXCORE-335] - StramLocalCluster should teardown StreaminContainerManager after run is complete
* [APEXCORE-349] - Application/operator/port attributes should be returned using string codec in REST service
* [APEXCORE-350] - STRAM's REST service sometimes returns duplicate and conflicting Content-Type headers
* [APEXCORE-352] - Temp directories/files not created in temp directory specified by system property java.io.tmpdir
* [APEXCORE-353] - Buffer server may stop processing data
* [APEXCORE-355] - CLI list-*-attributes command name change
* [APEXCORE-362] - NPE in StreamingContainerManager
* [APEXCORE-363] - NPE in StreamingContainerManager
* [APEXCORE-374] - Block with positive reference count is found during buffer server purge
* [APEXCORE-375] - Container killed because of Out of Sequence tuple error.
* [APEXCORE-376] - CLI command 'dump-properties-file' does not work when connected to an app
* [APEXCORE-385] - Temp directories/files not always cleaned up when launching applications
* [APEXCORE-391] - AsyncFSStorageAgent creates tmp directory unnecessarily
* [APEXCORE-393] - Reset failure count when consecutive failed node is removed from blacklist
* [APEXCORE-397] - Allow configurability of stram web services authentication
* [APEXCORE-398] - Ack may not be delivered from buffer server to it's client
* [APEXCORE-403] - DelayOperator unit test fails intermittently
* [APEXCORE-413] - Collision between Sink.getCount() and SweepableReservoir.getCount()
* [APEXCORE-415] - Input Operator double checkpoint
* [APEXCORE-421] - Double Checkpointing May Happen In Input Node On Shutdown
* [APEXCORE-422] - Checkstyle rule related to allowSamelineParameterizedAnnotation suppression
* [APEXCORE-434] - ClassCastException when making webservice calls to STRAM in secure mode
* [APEXCORE-436] - Update log4j.properties in archetype test resources to set debug level for org.apache.apex
* [APEXCORE-439] - After dynamic repartition application appears blocked
* [APEXCORE-444] - 401 authentication errors when making webservice calls to STRAM in secure mode
* [APEXCORE-445] - Race condition in AsynFSStorageAgent.save()

#### Task
* [APEXCORE-293] - Add core and malhar documentation to project web site
* [APEXCORE-319] - Document backward compatibility guidelines
* [APEXCORE-340] - Rename dtcli script to apex
* [APEXCORE-345] - Upgrade to 0.7.0 japicmp
* [APEXCORE-381] - Upgrade async-http-client dependency version because of security issue
* [APEXCORE-410] - Upgrade to netlet 1.2.1
* [APEXCORE-423] - Fix style violations in Apex Core
* [APEXCORE-446] - Add source jar in the shaded-ning build

#### Sub-task
* [APEXCORE-254] - Introduce Abstract and Forwarding Reservoir classes
* [APEXCORE-269] - Provide concrete implementation of AbstractReservoir based on SpscArrayQueue
* [APEXCORE-365] - Buffer server handling for tuple length that exceeds data list block size
* [APEXCORE-369] - Fix timeout in AbstractReservoirTest.performanceTest
* [APEXCORE-402] - SpscArrayQueue to notify publishing thread on not full condition

Version 3.3.0 
------------------------------------------------------------------------------------------------------------------------
### Summary

#### dtHub
DataTorrent RTS allows companies to quickly build low latency real time Big Data application that can scale and fault tolerant. With the introduction of dtHub, DataTorrent now host and maintain an application distributor. You can access it through dtManage and easily install or update application without having to upgrade the whole RTS platform. Prior to dtHub, RTS installer packaged both platform and applications. In 3.3, they are decoupled with significantly reduced installer size. You can independently choose when to upgrade the platform and when to install/upgrade applications.

#### dtManage
* Troubleshooting is made easier now that user can view the containers where physical operators have lived
* RTS Community Edition user can now view container logs and set log levels via dtManage. API for runtime DAG and property change are also available
* RTS Enterprise Edition is changed from 30 days to 60 days
* When an application is killed, RTS will delete the app directory according to policy  in dt-site.xml

#### dtDasbhoard
* New widgets for the dashboard: Geo coordinates with circles, Geo regions with gradient fill and single Value 

#### dtAssemble (beta)
* Top level “Develop” takes users directly to Application Page
* Navigation changes on how user get to Tuple Schema. User goes to It is now "Edit Application" then "Tuple Schema"
* Development (breadcrumb link)

#### Documentation 
* FileSplitter: http://docs.datatorrent.com/operators/file_splitter/
* Block Reader: http://docs.datatorrent.com/operators/block_reader/

#### Apache Apex 3.3 
* Support for iterative processing. It is a building block to support machine learning
* Ability to populate DAG at application launch time
* Pre checkpoint operator callback so that it can execute a logic before the operator gets checkpointed (e.g. flush file to HDFS)
* Provide the option for operator to do checkpointing in a distribute in-memory store. It is faster than HDFS due to disk i/o latency
* Add group ID information in an applicatin package.  It is visible for application grouping in dtHub.

#### Known Issues in 3.3 
* [SPOI-7696] - Community edition (which gets activated after expired license) does not have newly added community features
* [SPOI-7471] - Temp directories/files not cleaned up in Gateway
* [SPOI-7697] - "Set Logging Levels" option on application details page does not show initial target/loglevel fields
* [SPOI-7668] - If AppDataTracker is disabled, changing the YARN queue does not restart it
* [SPOI-7652] - AppDataTracker does not show up under "Choose apps to visualize" in dashboard settings
* [SPOI-7678] - On configuration complete, summary page should populate RTS version
* [SPOI-7479] - dtHub "check for updates" option says 'no updated versions' and then displays updated packages
* [SPOI-7626] - Stacked Area Chart widget shows NaN values on Firefox

### Appendix

#### dtHub
* [SPOI-6787] - dtHub UI - explore, import, download
* [SPOI-7023] - dtHub UI - check for updates
* [SPOI-3643] - Remove import default packages from Application Packages page
* [SPOI-7451] - Add options summary to Application Packages screen
* [SPOI-6968] - Please make API return a new property that indicates whether gateway has internet access or not (for dtHub feature)
* [SPOI-7059] - add "tags" to import list

#### dtManage
* [SPOI-3549] - dtManage - Ability to view container history where physical operator has lived
* [SPOI-7382] - UI evaluation license expiration message colour update
* [SPOI-7418] - Visualize AppDataTracker data
* [SPOI-7129] - Add countdown and links to enterprise evaluation in dtManage
* [SPOI-7226] - Remove choice of community edition and enterprise evaluation in install wizard

#### dtDashboard
* [SPOI-6522] - Geo coordinates with weighted circles widget
* [SPOI-6523] - Geo regions with gradient fill widget
* [SPOI-7247] - Create dimensional single value widget
* [SPOI-7258] - Persist label changes in trend and single value widgets
* [SPOI-6023] - dtDashboard - Widgets that support dimension schema can support multi-value keys 
* [SPOI-6021] - Support tag for  snapshot server and dimension store
* [SPOI-6331] - Notify user when widget is unable to automatically load data
* [SPOI-6658] - UI says "no rows testing" when no data available to display in tables
* [SPOI-6887] - Changing choropleth map class does not remove previously selected map
* [SPOI-7246] - Change default widget colors to be websafe
* [SPOI-7257] - add tags-based dimension query settings in trend widget 

#### dtAssemble (beta)
* [SPOI-7133] - Tuple Schemas change and Develop on top navigation bar change

#### Megh
* [SPOI-7665] - Megh enhancements for TelecomDemo
* [SPOI-7230] - Add group id information to all megh app packages
* [SPOI-7251] - Add directory structure for modules in megh
* [SPOI-7693] - Add Telecom Demo To Megh

#### Docs
* [SPOI-6471] - Documentation: FileSplitter
* [SPOI-6472] - Documentation: BlockReader

#### RTS Community Edition
* [SPOI-7670] - Removing dtManage restrictions from community edition
* [SPOI-7682] - Lock down all auth/security features in community edition
* [SPOI-7130] - Community edition to have an upgrade button to Enterprise eval
* [SPOI-7243] - make all locked-feature places(e.g. Visualize link, logs button, new application button) to have the same effect of "upgrade to enterprise                " link in community edition, and to have a key icon instead of being crossing out

#### RTS Enterprise Edition
* [SPOI-7127] - Change enterprise evaluation days from 30 days to 60 days

#### Bug Fixes
* [SPOI-5622] - dtcli: Command 'show-physical-plan' fails with "Failed web service request" error
* [SPOI-6352] - Gateway's RM Proxy REST calls don't work with HA-enabled
* [SPOI-6424] - Gateway cannot determine its own local address to the cluster when RM HA is enabled
* [SPOI-6555] - Add Missing datatorrent.apppackage.classpath property to dt-demos
* [SPOI-6624] - ADT issues impacting dtingest Dashboard
* [SPOI-6674] - AbstractFileOuptutOperator refactoring and fixes
* [SPOI-6834] - fixing scope of jars in Megh
* [SPOI-6837] - Gateway has a lot of blocked threads under heavy load
* [SPOI-6886] - Selected map feature / object should be persisted
* [SPOI-6949] - Collation in BucketManager incurs a performance hit while writing to HDFS and is not an optimization
* [SPOI-6999] - Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7026] - only lists the ones that have different versions in update section
* [SPOI-7027] - fix a bug that loading is forever when there is no updates in check for updates
* [SPOI-7028] - compare version number and only list packages whose dtHub version is higher than installed version in update section
* [SPOI-7037] - support sorting, filter in string-type columns in import pkgs, update pkgs
* [SPOI-7040] - optimize visual layout of import pkgs page
* [SPOI-7042] - only shows packages that are compatible with the APEX version in check for update list
* [SPOI-7080] - remove bar chart widget that is not in use
* [SPOI-7106] - Update Megh japi version and fix the broken build because of semantic version
* [SPOI-7138] - Dimension unifier return empty results 
* [SPOI-7236] - Console build fails due to jsHint issues after updating version
* [SPOI-7293] - Post installation links no longer available on datatorrent.com
* [SPOI-7296] - gateway spills out error trying to write to /var/log/datatorrent/ in local install
* [SPOI-7297] - Local install fails in secure mode
* [SPOI-7309] - HDHT Broken and Hangs After Wall And Purge Changes
* [SPOI-7338] - After changing configuration "dt.appDataTracker.queue" (e.g. to "root.ashwin") and kill system application AppDataTracker, AppDataTracker                 incorrectly starts with the default queue ("root.dtadmin").
* [SPOI-7350] - Installation wizard final step refers to invalid developers URL
* [SPOI-7361] - get-operator-attributes fails on CDH
* [SPOI-7383] - Update invalid links in UI console info section
* [SPOI-7447] - dtHub UI - check for updates - when there is no newer version for any installed package, loading image will be hanging forever
* [SPOI-7460] - On Visualize tab, link for documentation does not work
* [SPOI-7469] - Remove "in HDHT" from System Configuration page
* [SPOI-7471] - Temp directories/files not cleaned up in Gateway
* [SPOI-7474] - "Disable App Data Tracker" option does not work
* [SPOI-7481] - Launch macros for demo apps should be removed in dtcli
* [SPOI-7482] - Cloning/deleting application under Application package does not refresh the list
* [SPOI-7498] - Verify dtingest download link change on datatorrent website
* [SPOI-7502] - Lock mishandling in App Package local cache code
* [SPOI-7503] - Changing "dt.appDataTracker.enable=true/false" using REST API calls doesn't take effect unless gateway restarts
* [SPOI-7510] - Application launch notifications no longer show up
* [SPOI-7523] - Kill only AppDataTracker whose user is the current login user when App Data Tracker queue is changed.
* [SPOI-7542] - Unable to import app package from dtHub
* [SPOI-7574] - dtcli command 'dump-properties-file' does not work when connected to an app
* [SPOI-7577] - For 3.3.0 release, RTS version is shown as 3.3.1 in System Configuration
* [SPOI-7604] - HDHT bucket meta class is obfuscated incorrectly
* [SPOI-7615] - dtHub intermittently throws error as "Failed to import" while importing multiple pkgs at the same time 
* [SPOI-7619] - specify bower link malhar-angular-dashboard to version 1.0.1
* [SPOI-7644] - Need to update installer script
* [SPOI-7679] - Unable to access newly added features for Community edition.

### Apache Apex 3.3 Change Logs
https://github.com/apache/incubator-apex-core/blob/v3.3.0-incubating/CHANGELOG.md

* [SPOI-7061] - Implement retention policy for terminated apps
* [SPOI-7492] - DT_GATEWAY_CLIENT_OPTS overrides all JVM options and there is no way to supply additional options to the default options
* [SPOI-5735] - Create local file cache for app package
* [SPOI-6981] - Move orderedOutput feature to AbstractDeduper. Rename AbstractDeduperOptimized to AbstractBloomFilterDeduper
* [SPOI-7448] - Work around the attribute bug detailed in APEXCORE-349 so that ADT still works
* [SPOI-7470] - Work around namenode NPE bug in hadoop 2.7.x to avoid throwing NPE to the user. https://issues.apache.org/jira/browse/APEXCORE-45 and https://issues.apache.org/jira/browse/HDFS-9851
* [SPOI-6381] - Support Dynamically Updating Enum Values For Keys In The Dimensions Store
* [SPOI-6545] - Allow Gateway to directly contact dtHub to install app packages


### New Feature
* [APEXCORE-3] - Ability for an operator to populate DAG at launch time
* [APEXCORE-60] - Iterative processing support
* [APEXCORE-78] - Pre-Checkpoint Operator Callback
* [APEXCORE-276] - Make App Data Push transport pluggable and configurable
* [APEXCORE-283] - Operator checkpointing in distributed in-memory store
* [APEXCORE-288] - Add group id information to apex app package

### Improvement
* [APEXCORE-40] - Semver dependencies should be in Maven Central
* [APEXCORE-162] - Enhance StramTestSupport.TestMeta API
* [APEXCORE-181] - Expose methods in StramWSFilterInitializer to get the RM webapp address
* [APEXCORE-188] - Make type graph lazy load
* [APEXCORE-199] - CLI should check for version compatibility when launching app package
* [APEXCORE-228] - Add maven 3.0.5 as prerequisites to the Apex parent pom
* [APEXCORE-229] - Upgrade checkstyle maven plugin (2.17) and checkstyle dependency (6.11.2)
* [APEXCORE-291] - Provide a way for an operator to specify its metric aggregator instance
* [APEXCORE-305] - Enable checkstyle violations logging to console during maven build

### Bug
* [APEXCORE-58] - endWindow is being called even when the operator is being undeployed
* [APEXCORE-83] - beginWindow not called on recovery
* [APEXCORE-193] - apex-app-archetype has extraneous entry that generates a warning when running it
* [APEXCORE-204] - Update checkstyle and codestyle to be the same
* [APEXCORE-211] - Brace placement after static blocks in checkstyle configuration
* [APEXCORE-263] - Checkpoint can be performed twice for same window
* [APEXCORE-274] - removeTerminatedPartition fails for Unifier operator
* [APEXCORE-275] - Two threads can try to reconnect to websocket server upon disconnection
* [APEXCORE-278] - GenericNodeTest clutters test logs with unnecessary statement
* [APEXCORE-296] - Memory leak in operator stats processing
* [APEXCORE-300] - Fix checkstyle regular expression
* [APEXCORE-303] - Launch properties not evaluated

### Task
* [APEXCORE-24] - Takes out usage of Rhino as it is GPL 2.0
* [APEXCORE-186] - Enable license check in Travis CI
* [APEXCORE-253] - Apex archetype includes dependencies which do not belong to org.apache.apex
* [APEXCORE-298] - Reduce the severity of  line length check
* [APEXCORE-301] - Add "io" as a separate import to checkstyle rules
* [APEXCORE-302] - Update NOTICE copyright year
* [APEXCORE-308] - Implement findbugs plugin reporting
* [APEXCORE-317] - Run performance benchmark for the Apex Core 3.3.0 release

### Sub-task
* [APEXCORE-104] - Expand Module DAG
* [APEXCORE-105] - Support injecting properties through xml file on modules.
* [APEXCORE-144] - Provide REST api for listing information about module.
* [APEXCORE-151] - Provide code style templates for major IDEs (Eclipse, IntelliJ and NetBeans)
* [APEXCORE-182] - Add Apache copyright to IntelliJ
* [APEXCORE-194] - Add support for ProxyPorts in Modules
* [APEXCORE-226] - Strictly enforce wrapping indentation in checkstyle
* [APEXCORE-227] - Enforce left brace placement for anonymous class on the next line
* [APEXCORE-230] - Limit line lengths to be 120
* [APEXCORE-239] - Upgrade checkstyle to 6.12 from 6.11.2
* [APEXCORE-248] - Increase wrapping indentation from 2 to 4.
* [APEXCORE-249] - Enforce class, method, constructor annotations on a separate line
* [APEXCORE-250] - Exclude DtCli from System.out checks
* [APEXCORE-267] - Fix existing checkstyle violations in api
* [APEXCORE-270] - Enforce checkstyle validations on test classes
* [APEXCORE-272] - Attributes added to operator inside Module is not preserved.
* [APEXCORE-273] - Fix existing checkstyle violations in bufferserver module
* [APEXCORE-306] - Recovery checkpoint handing in iteration loops

Version 3.2.1
------------------------------------------------------------------------------------------------------------------------

### Summary
This release bundles a few fixes and features for customers who are on 3.2.0 and not ready to upgrade to 3.3.0  

#### Improvement
* [SPOI-7900] add default role to first time login user
* [SPOI-7061] Implement retention policy for terminated apps

#### Bug Fixes
* [SPOI-6999] Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7471] Temp directories/files not cleaned up in Gateway
* [SPOI-7971] After dynamic repartition application appears blocked

#### Known Issues
* [SPOI-6999] Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7061] Implement retention policy for terminated apps
* [SPOI-7471] Temp directories/files not cleaned up in Gateway
* [SPOI-7971]After dynamic repartition application appears blocked

#### Apache Apex 
* [APEXCORE-327] - Implement proper semantic version checks in patch release branches
* [APEXCORE-358] - Make RPC timeout configurable
* [APEXCORE-410] - Upgrade to Netlet 1.2.1
* [APEXCORE-365] - Buffer server handling for tuple length that exceeds data list block size

#### Apache Apex Bug Fixes
* [APEXCORE-130] - Throwing A Runtime Exception In Setup Causes The Operator To Block
* [APEXCORE-274] - removeTerminatedPartition fails for unifier operator
* [APEXCORE-275] - Two threads can try to reconnect to websocket server upon disconnection
* [APEXCORE-350] - STRAM's REST service sometimes returns duplicate and conflicting Content-Type headers
* [APEXCORE-353] - Buffer server may stop processing data
* [APEXCORE-362] - NPE in StreamingContainerManager
* [APEXCORE-363] - NPE in StreamingContainerManager
* [APEXCORE-374] - Block with positive reference count is found during buffer server purge
* [APEXCORE-375] - Container killed because of Out of Sequence tuple error.
* [APEXCORE-385] - Temp directories/files not always cleaned up when launching applications
* [APEXCORE-391] - AsyncFSStorageAgent creates tmp directory unnecessarily
* [APEXCORE-398] - Ack may not be delivered from buffer server to it's client

Version 3.2.0
------------------------------------------------------------------------------------------------------------------------

### New Feature

* [SPOI-6351] - Add feature to REST API to get queue information from cluster

### Improvement

* [SPOI-5777] - Kafka start offset should have user option to read from latest or earliest
* [SPOI-5828] - Stackstraces should not be shown on errors
* [SPOI-6641] - Implement "forever" bucket in DimensionComputation
* [DTIN-40] - Observed unused variables in SplunkBytesInputOperator
* [DTIN-69] - Move Query Operators implementation to newer one
* [DTIN-50] - [dtIngest] add parameter "parallel readers"

### Bug

* [SPOI-5104] - Ingestion: Failed to copy data when inputs include a directory and a subdirectory
* [SPOI-5216] - FileSplitter fails with ConcurrentModificationException
* [SPOI-5571] - S3 : Copying data failed with RuntimeException saying 'Unable to move file'
* [SPOI-5809] - Kryo Exception In Stateful Stream Codec When Operator Is Killed From UI and Comes Back Up
* [SPOI-5823] - Downstream container falling behind when buffer spooling is enabled
* [SPOI-5899] - Ability to retrieve schemas from an app package
* [SPOI-6053] - Schema Generator - bool getter should be isBool and not getBool
* [SPOI-6073] - AbstractFileOutputOperator not finalizing the file after the recovery
* [SPOI-6079] - Installation wizard: 'continue' button is misplaced in last step of installation
* [SPOI-6098] - 'single run' doesnt work
* [SPOI-6202] - Sandbox 3.1 has community license instead of enterprise
* [SPOI-6204] - Sandbox 3.1 loses uploaded license after reboot
* [SPOI-6222] - HDFS recovery in sandbox causes license to degrade to community
* [SPOI-6236] - Add 1s aggregations to App Data Tracker
* [SPOI-6298] - Dimensions Store Can Become Blocked
* [SPOI-6383] - Sometimes expired query is still executed.
* [SPOI-6393] - Markdown code blocks render with invalid syntax highlights in console
* [SPOI-6446] - Merge PojoEnrichment and TupleEnrichment
* [SPOI-6505] - Exceptions from asm when uploading apps
* [SPOI-6603] - Warning messages shown on console are not completely visible
* [SPOI-6709] - Temporarily Remove Methods Which Override Their Return Type In MEGH From Semver Checks
* [SPOI-6846] - DT dashboard guide link is not working
* [SPOI-6855] - Broken links observed on summary page while DT RTS configuration 
* [SPOI-6856] - Correct docs index.html links and title
* [DTIN-51] - bandwidth option was removed during merge
* [DTIN-101] - For message-based-input to message-based-output, compression & encryption options should not be visible on config UI
* [DTIN-102] - [Ingestion UI] If kafka as output type, then Brokerlist is the configuration parameter, not zookeeper quorum
* [DTIN-112] - Message based input to FTP output fails with IOException while appending the data
* [DTIN-113] - Kafka input to kafka output fails in MessageWriter with EOFException while fetching output topic metadata
* [DTIN-123] - All files are not getting copied when bandwidth option is specified
* [DTIN-124] - For kafka to hdfs, if offset is set to 'Earliest', messages are not consumed from the beginning
* [DTIN-126] - 'Compact files' option should be disabled for message based Input type
* [DTIN-129] - StreamCorruptedException while decrypting AES/PKI encrypted file
* [DTIN-130] - Text box for 'Bandwidth to use' should accept integer values only
* [DTIN-155] - Messages are dropped when bandwidth option is enabled
* [DTIN-160] - Copying data from S3 to HDFS fails with NoSuchMethodError
* [DTIN-161] - Message based input to S3N output fails with IOException while appending the data
* [DTIN-162] - JMS messages are not fully consumed in case of JMS to kafka
* [DTIN-164] - Data values in 'Table' widget flicker when encryption is enabled
* [DTIN-165] - Data source names for dtingest should not contain 'null'
* [DTIN-174] - Append doesn't work for S3, FTP filesystems and ObjectOutputStream
* [DTIN-176] - Parallel read is not working in case of FTP and S3 as input
* [DTIN-186] - FileMerger failed with unable to merge file exception

### Task

* [SPOI-5173] - DAG validation: Attribute values Serializable
* [SPOI-5403] - Ingestion Splunk integration
* [SPOI-5801] - Make a MapR partner (datatorrent) sandbox
* [SPOI-5958] - dtView Integration for ingestion metric visualization
* [SPOI-6241] - Change in enterprise license
* [SPOI-6439] - Run benchmark for 3.2.0 release
* [SPOI-6691] - Decouple malhar version from dt version in dtingest pom dependancies
* [DTIN-20] - Accept bandwidth limit in units other than byes/s in dtingest script
* [DTIN-38] - Needs to check the Query frequency option is available for Splunk Input Operator
* [DTIN-47] - Merge code from release-1.0.1 branch to ingegration-1.1.0 branch
* [DTIN-54] - Disabling the splunk from dtIngest script
* [DTIN-71] - Integrate release 1.0.1 branch with integration-1.1.0


### Sub-task

* [SPOI-5369] - Integrate schema support in Cassandra Input/Output
* [SPOI-5437] - Create Jdbc Pojo input operator and integrate schema support in Jdbc POJO input/output
* [SPOI-5819] - Bandwidth control for file based sources
* [SPOI-5820] - Bandwidth control for message based sources
* [SPOI-5959] - Metrics for compression, encryption
* [SPOI-6337] - Expose bandwidth metrics
* [SPOI-6441] - Change console home page to be welcome screen instead of operations summary



Version 3.1.1
------------------------------------------------------------------------------------------------------------------------

### Improvement

* [SPOI-5828] - Stackstraces should not be shown on errors

### Bug

* [SPOI-5786] - AppDataTracker Custom Metric Store Deadlock
* [SPOI-6032] - App Builder should not show property from super class
* [SPOI-6049] - DimensionStoreHDHT Should always set meta data on aggregates in processEvent, even if the aggregate is received in a committed window.
* [SPOI-6073] - AbstractFileOutputOperator not finalizing the file after the recovery
* [SPOI-6090] - Ingestion: Error decrypting files for message based sources
* [SPOI-6147] - Launch issue with "Starter Application Pack"
* [SPOI-6202] - Sandbox 3.1 has community license instead of enterprise
* [SPOI-6203] - -ve Memory reported for Application Master
* [SPOI-6204] - Sandbox 3.1 loses uploaded license after reboot
* [SPOI-6222] - HDFS recovery in sandbox causes license to degrade to community
* [SPOI-6286] - App Data Tracker Number Format Exception In Idempotent Storage Manager
* [SPOI-6304] - Fix netlet dependency
* [SPOI-6313] - Work Around APEX-129
* [SPOI-6333] - RandomNumberGenerator in apex-app-archetype does not use numTuples property

### Task

* [SPOI-5755] - Gateway should show "HDFS is not up yet"
* [SPOI-6148] - Update website with release 3.1
* [SPOI-6241] - Change in enterprise license


Version 3.1.0
------------------------------------------------------------------------------------------------------------------------

### New Feature
* [SPOI-4670] - Enable message schema management in App Builder
* [SPOI-5844] - Retrieve older versions of schemas

### Improvement
* [SPOI-5611] - Simplify PubSub operators to supply Gateway connect address URI by default

### Bug
* [SPOI-4380] - MxN unifier not removed when partition is removed from physical plan.
* [SPOI-5338] - Cleanup OperatorDiscoverer class to remove reflection and use ASM
* [SPOI-5582] - Ingestion: Fails with "Unable to merge file" with FTP as destination
* [SPOI-5697] - Unable to launch ingestion app through Ingestion wizard
* [SPOI-5743] - App package import also needs to do the typegraph stuff as upload
* [SPOI-5831] - Add getter for properties for Twitter Demo
* [SPOI-5833] - Schema class not loaded during validation
* [SPOI-5841] - e2e files being added to app/index.html with gulp inject:scripts
* [SPOI-5857] - Gateway has trouble getting to STRAM until after restart
* [SPOI-5943] - chicken and egg problem for entering kerberos credentials data to dt-site.xml
* [SPOI-5946] - Port compatibility when port require schemas
* [SPOI-6002] - AppBuilder fails to load operator due to NullPointerException

### Task
* [SPOI-5307] - Mocha based tests for Gateway API calls
* [SPOI-5749] - Certify MapR sandbox
* [SPOI-5750] - Create Splunk forwarder operators
* [SPOI-5751] - Create splunk forwarder input operator
* [SPOI-5752] - Create splunk forwarder output operator
* [SPOI-5753] - Create splunk forwarder configuration specification
* [SPOI-5754] - Change node1 twitter demos settings to 5 mins in node1 conf demo conf file
* [SPOI-5755] - Gateway should show "HDFS is not up yet"
* [SPOI-5756] - Test license expiry on sandbox as part of sandbox testing
* [SPOI-5764] - Gateway to show better error messages on all 500 errors
* [SPOI-5803] - Support of custom aggregation for ADT
* [SPOI-5893] - Changes for retrieving container and operator history information

### Sub-task
* [SPOI-4946] - Handle new @useSchema and @description property metadata in UI
* [SPOI-4980] - Schema Management in the UI
* [SPOI-5505] - handle Object-to-Object port compatibility with and without schema
* [SPOI-5506] - handle Object-to-Pojo port compat with schema
* [SPOI-5513] - handle port compatibility with generic type ports
* [SPOI-5747] - Automatically generate new eval license when sandbox starts up


Version 3.0.0
------------------------------------------------------------------------------------------------------------------------

### Sub-task
* [SPOI-1901] - Dynamic property changes lost on AM restart 
* [SPOI-4820] - Add an api call to retrieve all the application, operator and port attributes available for the app-package
* [SPOI-4891] - Example for schema meta data and property doclet tag
* [SPOI-4968] - Capture @useSchema and @description doclet tags from docblocks
* [SPOI-4972] - Design Schema API for managing schemas
* [SPOI-4973] - Create a Schema resource which will contain schema calls
* [SPOI-4987] - Generate pojo class using schema provided in json
* [SPOI-4999] - Implement the rest call to save schema on the backend
* [SPOI-5211] - Support custom visualization link
* [SPOI-5237] - Type of attributes are wrong when it is an inner class or enum
* [SPOI-5357] - LogicalNode may swallow END_STREAM message in catchUp
* [SPOI-5361] - Button for dt.phoneHome.enable property on system config page
* [SPOI-5527] - Implement Queue Option


### Bug
* [SPOI-4321] - Datatorrent Core Trigger Jenkings Job hangs
* [SPOI-4633] - Resolve type variable across the type hierarchy 
* [SPOI-4789] - Time calculated from window Id using WindowGenerator.getMillis is incorrect at times 
* [SPOI-4884] - Intermittent failure for CustomMetricTest
* [SPOI-4896] - Kafka operator stop consuming from kafka cluster after it is restarted.
* [SPOI-4941] - For kafka operator in app builder certain properties need to be set twice
* [SPOI-5006] - If incompatible change made in platform, we need to recompute the typegraph automatically
* [SPOI-5074] - Code/fix code that leads to classloader leaks in Gateway
* [SPOI-5087] - Bucket ID Tagger In app data tracker has very high latency
* [SPOI-5323] - Malhar operators are not packaged with distribution for 3.0
* [SPOI-5359] - License Type, License ID, and Features should not just be empty on LicenseInfo page
* [SPOI-5360] - When license upload fails with no message, install wizard should not have an unaddressed colon
* [SPOI-5379] - NoClassDefFoundError due to indirect reference to dt-common classes
* [SPOI-5385] - No error message is returned when DTCli gets an NPE
* [SPOI-5389] - Support for RM and HDFS delegation token renewal in secure HA environments
* [SPOI-5433] - Asm code not working for jdk 1.8
* [SPOI-5469] - Datatorrent DTX trigger Jenkins Job fails on timeout
* [SPOI-5472] - Undeploy heartbeat requests are not processes if container is idle
* [SPOI-5484] - Ingestion FTP as output does not work with vsftpd
* [SPOI-5497] - Could not open pi demo in 3.0.0 RC2
* [SPOI-5498] - Typegraph exception with 3.0.0 RC2
* [SPOI-5500] - Saving an app whose streams have an assigned schema (not handwritten java class) fails with 404
* [SPOI-5504] - Make temporary file names unique to avoid lease expiry
* [SPOI-5530] - Failed to edit pidemo JSON based application
* [SPOI-5536] - App jar is missing from typegraph
* [SPOI-5552] - Non-concrete classes being returned with assignableClasses call
* [SPOI-5562] - Boolean Operator Property Values Are Blank In the Operator Properties Table
* [SPOI-5569] - Launching AdsDimensionsDemoGeneric fails with ClassNotFoundException 
* [SPOI-5577] - Sometimes CustomMetrics Store Returns No Data When There is Data
* [SPOI-5578] - Sometimes Custom Metrics Data Source Is Not Accessible From Widgets
* [SPOI-5582] - Ingestion: Fails with "Unable to merge file" with FTP as destination
* [SPOI-5583] - DFS root directory check is failing on MapR cluster
* [SPOI-5593] - App Builder search tooltip
* [SPOI-5597] - Bad log level WARNING in UI
* [SPOI-5604] - Pressing "Enter" in newDashboardModal closes the modal
* [SPOI-5607] - Sales Enrichment operator needs to be recovered and added to Sales Dimensions demo
* [SPOI-5612] - AppBuilder can not deserialize instance of java.net.URI with PubSubWebSocketAppData operators
* [SPOI-5627] - error message from install script from 3.0.0-RC4 
* [SPOI-5628] - Update dt-site of sandbox for new Sales demo enrichment operator
* [SPOI-5629] - Data visualization links broken with APPLICATION_DATA_LINK 
* [SPOI-5632] - If there are no uncategorized operators, dont show an uncategorized group
* [SPOI-5636] - dtcp is not getting packaged in installation (RC4)
* [SPOI-5637] - Allatori Configuration errors in ingestion pom.xml
* [SPOI-5640] - dtcp: When invalid value is provided for scan interval no error is thrown by dtcp, just exits out
* [SPOI-5643] - When An Application Is Restarted Under A Different User Name Custom Metrics Data is Not Saved.
* [SPOI-5644] - isChar validation should strip \u000 character
* [SPOI-5646] - Megh demos is failing release build
* [SPOI-5647] - launchPkgApplicationDropdown tries to push an alert to scope.alerts, which is undefined
* [SPOI-5653] - When Gateway Restarts App Data Tracker It Should Do It Using HA Mode
* [SPOI-5655] - If gateway fails to launch (e.g., port 9090 is in use), installer should inform user
* [SPOI-5656] - Update Bucket ID Tagger To use only user name for determining bucket Ids
* [SPOI-5661] - Set default store in HDHTReader
* [SPOI-5662] - Improve defaults of Enrichment Operator In Sales Demo
* [SPOI-5664] - Omit Aggregator Registry From UI
* [SPOI-5672] - App Data Tracker Compliation is failing
* [SPOI-5673] - Unable to launch ingestion app with JMS as input source 
* [SPOI-5675] - Kafka keys population error
* [SPOI-5676] - Fix API doc generation
* [SPOI-5685] - Complete App Builder category and property name fixes
* [SPOI-5688] - Correct interactive demo tutorials available in the Learn section
* [SPOI-5689] - Installer produces error message about removing docs directory
* [SPOI-5690] - Images missing from lean section tutorials after installing release build
* [SPOI-5693] - Console does not upload default DT application packages
* [SPOI-5697] - Unable to launch ingestion app through Ingestion wizard
* [SPOI-5704] - App package references in docs
* [SPOI-5705] - Build version incorrect
* [SPOI-5706] - api and user docs not viewable through gateway
* [SPOI-5707] - Packaging utilities jar in Ingestion
* [SPOI-5708] - Update netlet dependency to release for 3.0
* [SPOI-5712] - Unable to launch dtingest app using dtingest command line utility but able to launch via UI


### Improvement
* [SPOI-4513] - Expose app data tracker stats as "pseudo-datasource" for each application
* [SPOI-4889] - Make BucketIdTagger fault tolerant
* [SPOI-5320] - License URL should open in new window 
* [SPOI-5494] - Support "queue" query parameters from launch app modal
* [SPOI-5535] - Console should validate duplicate app name in the same app package
* [SPOI-5548] - Check compaction keys from UI
* [SPOI-5603] - Add syntax highlighting to Markdown code blocks
* [SPOI-5611] - Simplify PubSub operators to supply Gateway connect address URI by default
* [SPOI-5623] - License upgrade link should open in separate tab
* [SPOI-5633] - Improve markdown content display styles
* [SPOI-5657] - Redirect to welcome screen of the Learn section after install
* [SPOI-5694] - Ingestion default app-config should populate meaningful defaults


### New Feature
* [SPOI-4672] - Support for secure HA environments
* [SPOI-5288] - Add "launch" button to each item in the list of app packages
* [SPOI-5304] - Support ingestion install mode
* [SPOI-5313] - Obfuscate ADT in the distribution build
* [SPOI-5561] - Markdown documentation support in the Console


### Task
* [SPOI-4228] - The location of App Data Tracker from installation and from devel mode
* [SPOI-4658] - App Data Tracker Technical Doc
* [SPOI-4879] - Hide operators that have no input ports from App builder
* [SPOI-4983] - Installer for Ingestion app
* [SPOI-4984] - Obfuscate ingestion jar
* [SPOI-5029] - Move new x-java dependencies in appDataFramework branch to core
* [SPOI-5032] - Review comparison for appDataFramework pull request to the master
* [SPOI-5050] - Licensing-related changes to the UI for 3.0
* [SPOI-5255] - Support enhancements to uiTypes
* [SPOI-5314] - Include obfuscated App Data Tracker in the install bundle
* [SPOI-5370] - Megh obfuscation
* [SPOI-5502] - Allatori obfuscates operator class names even config has keep-name on class * implements com.datatorrent.api.Operator
* [SPOI-5555] - [dtcp] set default app package for ingestion
* [SPOI-5574] - Update installer README
* [SPOI-5608] - Docs for backward compatibility in 3.0 
* [SPOI-5610] - Add testing to Markdown support models, pages, directives
* [SPOI-5621] - Include Ingestion utilities in DT installer
* [SPOI-5624] - [Ingestion] Hide message output destination when input is file source
* [SPOI-5635] - Changing product name to dtIngest
* [SPOI-5638] - Post ingestion packge to central DT maven repository
* [SPOI-5639] - App Data Tracker Release Job
* [SPOI-5645] - support "short" primitive type in app builder
* [SPOI-5658] - Dummy ticket for Apex-17 - Change CustomMetric annotation to AutoMetric and enhancements


### Bug
* [MLHR-1726] - Bug in PojoUtils
* [MLHR-1742] - Create a wrapper method in POJOUtils that returns the appropriate getter for primitives
* [MLHR-1752] - PojoUtils create/constructSetter does not handle boxing/unboxing
* [MLHR-1756] - Exclude hadoop-common and other hadoop libraries from application
* [MLHR-1789] - Complete Category and property name fixes


### Improvement
* [MLHR-1725] - Add Support for Setters to PojoUtils
* [MLHR-1757] - change scope of dt-engine in maven build
