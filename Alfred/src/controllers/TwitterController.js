
var fs = require('fs')
var path = require('path')
var Twit = require('twit')

var T = new Twit(require('../configuration/twitter-authentication'))

module.exports = {

    getTweet(req, res) {

        var { filter } = req.params

       return  T.get('search/tweets', { q: filter, count: 1 }, function(err, data, response) {
            console.log(data)
            return res.json(data)
          })
    }
}