const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const apiRouter = require('./routers/api')

app.use(logger('dev'));
app.use (express.json());
app.use(cors());

const {connect} = require('./db/db')



app.use('/', apiRouter)

connect();

module.exports = app