import express from "express";

import database from "./database/connect.mjs";
import { registerRoutes } from "./routes/index.mjs";

const PORT = process.env.PORT || 80;

database.connect();

const app = express();

registerRoutes(app);

app.listen(PORT);
