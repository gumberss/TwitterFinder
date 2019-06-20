const express = require('express')
const SoundController = require('./controllers/TwitterController')

const routes = express.Router()

routes.get('/getTweet/:filter', SoundController.getTweet)

module.exports = routes