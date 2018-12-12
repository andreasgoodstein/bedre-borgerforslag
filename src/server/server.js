const express = require('express')

const database = require('./database/connect')
const getAll = require('./routes/getall')

database.connect()

const app = express()

app.get('*', getAll)

app.listen(80)