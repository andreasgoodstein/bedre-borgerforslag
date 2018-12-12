const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  externalId: { type: String, unique: true },
  title: String,
  date: String,
  votes: Number,
  status: String,
  url: String
})

const requestModel = mongoose.model('Forslag', requestSchema)

module.exports = requestModel