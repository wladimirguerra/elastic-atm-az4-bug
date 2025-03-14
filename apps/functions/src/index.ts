import "elastic-apm-node/start";

import {app} from '@azure/functions';

import "./service-bus-functions/service-bus-function";

app.hook.appStart(async () => {
  console.log('App started');
});

app.hook.appTerminate(async () => {
  console.log('App terminated');
});
