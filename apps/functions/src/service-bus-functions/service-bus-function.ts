import {app, ServiceBusTopicHandler} from "@azure/functions";

const handler: ServiceBusTopicHandler = async (message) => {
  console.log('Service Bus message received', message);
}

app.serviceBusTopic('ServiceBusFunction',{
  topicName: 'pedido',
  subscriptionName: 'vivapp',
  handler,
  connection: 'servicebus_url',
})
