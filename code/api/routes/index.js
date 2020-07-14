const pingRouter = require('./ping-router');
const healthCheck = require('./health-check-router');
const slotRouter = require('./slot-router');


const mountRoutes = app => {
  app.use(`/api/ping`, pingRouter);
  app.use(`/api/health-check`, healthCheck);
  app.use(`/api/slot`, slotRouter);
};

module.exports = mountRoutes;
