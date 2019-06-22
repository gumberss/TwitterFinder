const express = require('express')
const TwitterController = require('./controllers/TwitterController')

const routes = express.Router()

routes.get('/getTweet/:filter', TwitterController.getTweet)

module.exports = routes