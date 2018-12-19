const compression = require('compression');
const apicache = require('apicache');

const { getForslag } = require('./forslag');
const { getUpdates } = require('./updates');

const registerRoutes = (app) => {
  app.use(compression());
  app.use(apicache.middleware('1 minutes'));

  app.get('/api/v1/forslag', getForslag);
  app.get('/api/v1/update', getUpdates);
};

module.exports = {
  registerRoutes,
};
