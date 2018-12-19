const express = require('express');

const database = require('./database/connect');
const { registerRoutes } = require('./routes');

const PORT = process.env.PORT || 80;

database.connect();

const app = express();

registerRoutes(app);

app.listen(PORT);
