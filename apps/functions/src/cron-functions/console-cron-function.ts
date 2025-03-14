import {app, TimerHandler} from "@azure/functions";

const handler: TimerHandler = async () => {
  console.log('Cron function running');
}

app.timer('CronFunction',{
  handler,
  schedule: '0 */1 * * * *', // second, minute, hour, day of month, month, day of week
});
