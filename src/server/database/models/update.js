const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  externalId: String,
  votes: Number,
  updated: Date,
});

const requestModel = mongoose.model('Update', requestSchema, 'update');

module.exports = requestModel;
