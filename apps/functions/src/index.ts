import {app} from '@azure/functions';

import "./cron-functions/console-cron-function";

app.hook.appStart(async () => {
  console.log('App started');
});

app.hook.appTerminate(async () => {
  console.log('App terminated');
});
