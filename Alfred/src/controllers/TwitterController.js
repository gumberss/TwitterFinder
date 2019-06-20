
var fs = require('fs')
var path = require('path')
var Twit = require('twit')

var T = new Twit(require('../config/twitter-authentication'))

module.exports = {

    getTweet(req, res) {

        var { filter } = req.params

        T.get('search/tweets', { q: filter, count: 5 }, function(err, data, response) {
            console.log(data)
          })
      
        return res.json({})
    }
}