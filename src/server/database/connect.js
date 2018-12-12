const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect('mongodb://database')

  const db = mongoose.connection

  db.on('error', (error) => {throw error})
  db.once('open', () => {console.log('DB CONNECTED')})
}

module.exports = { connect }