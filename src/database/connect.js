const mongoose = require('mongoose');

const DB_URL = process.env.MONGODB_URI || 'mongodb://database';

const connect = () => {
  mongoose.connect(DB_URL, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', (error) => { throw error; });
  db.once('open', () => { console.log('DB CONNECTED'); });
};

module.exports = { connect };
