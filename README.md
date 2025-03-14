# ElasticAtmAz4Bug

This is a minimum reproducible example for the bug in the [ElasticSearch Azure plugin](https://github.com/elastic/apm-agent-nodejs)
version 4.11.1.

## Requirement

To make this example work, you need to have an Azure account and create a service-bus topic.
The connection string to the service-bus topic is required to run this example.

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Edit `local.settings.json` and add your connection string to the `servicebus_url` key:
    ```json
    {
      "IsEncrypted": false,
      "Values": {
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
        "AzureWebJobsStorage": "",
        "servicebus_url": "Endpoint=sb://<your-service-bus-name>.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=<your-shared-access-key>"
      }
    }
    ```
4. Run `npm run functions`.
5. The function will listen to the service-bus topic and log the messages to the console. At this point you can send a message to the service-bus topic.
6. Check the function logs for the error message thrown by the ElasticSearch Azure plugin.
   ```
    Stack: TypeError: Cannot read properties of undefined (reading 'direction')
    ```
