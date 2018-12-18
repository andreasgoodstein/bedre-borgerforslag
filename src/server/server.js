const express = require('express')

const database = require('./database/connect')
const getAll = require('./routes/getall')

const PORT = process.env.PORT || 80

database.connect()

const app = express()

app.get('*', getAll)

app.listen(PORT)