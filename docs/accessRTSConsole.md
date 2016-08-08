##Access DataTorrent RTS console

 1. In a browser, open the DataTorrent RTS console using a URL in the following format: 
 http:// RTS installation host:port defined during installation/
 2. (*Authentication enabled*) Use your credentials to log on.
 3. Perform system configuration:
**Note**: If this your first login, you will see a welcome page. 
	 4. (*First-time users*) Click **Configure** on the welcome page. 
	 5. (*Returning users*) Click **Configure** on the menu bar. 
 4. Configure your system:
**Note**: Use this option to enable App Data Tracker. App Data Tracker runs as a system service to track operator metric values in an application. It also sends these metric values to the dashboards that you create. 
	 7. Click **System Configuration**.
	 8. Under App Data Tracker, set the YARN queue in which you want App Data Tracker to run. 
**Note**: If you do not select a queue, App Data Tracker runs in the default queue. If you modify the queue settings, you must disable, and then enable App Data Tracker for the changes to reflect. 
	 7. Click **Enable App Data Tracker**. 
 5. Restart dtGateway:
**Note**: Perform this step every time you enable or disable App Data Tracker for the change to reflect.
	 8. Under Gateway Information, click **restart the gateway**. 
 
## Review license details or update your license
Note: Your should have received the DataTorrent RTS license file. The license file contains details such license type, license validity, and so on. Before updating the license, make sure that the license file is available on your computer or in a shared location. 
 
 1. Open the configuration page:
**Note**: If this your first login, you will see a welcome page. 
 - (*First-time users*) Click **Configure** on the welcome page. 
 -  (*Returning users*) Click **Configure** on the menu bar. 
 2. On the Configuration page, click **License Information**. 
 2. View the details of your current license under **Current License**.  
 3.  To upgrade or update the license, click Upload License and then click **Select a file from your computer**.
 4. Navigate to the location where your license file is installed, select the license file, and upload it.
##Perform initial configuration
**Note**: Perform these steps to validate your Hadoop installation, and to choose a DFS location where DataTorrent RTS artifacts will be installed. 
 1.  Open the configuration page:
**Note**: If this your first login, you will see a welcome page. 
 - (*First-time users*) Click **Configure** on the welcome page. 
 - (*Returning users*) Click **Configure** on the menu bar.
 2. On the Configuration page, click **Installation Wizard**. 
 3. On step I of the wizard, click **continue**. 
 4. On Step II, locate the value box against Hadoop location and the DFS location, and enter the paths to the Hadoop installation and the distributed file system (typically, HDFS). 
 5. Click **continue**, and on step III, click **continue** again. 
