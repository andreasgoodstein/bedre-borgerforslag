import compression from "compression";
import apicache from "apicache";

import { getForslag } from "./forslag/index.mjs";
import { getUpdates } from "./updates/index.mjs";

export const registerRoutes = (app) => {
  app.use(compression());
  app.use(apicache.middleware("1 minutes"));

  app.get("/api/v1/forslag", getForslag);
  app.get("/api/v1/update", getUpdates);
};

export default {
  registerRoutes,
};
