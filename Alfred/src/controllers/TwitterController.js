var { DocumentStore } = require('ravendb')
var fs = require('fs')
var path = require('path')
var Twit = require('twit')

const store = new DocumentStore(['http://192.168.99.100:8080'], 'TwitterFinder')
store.initialize()

var T = new Twit(require('../configuration/twitter-authentication'))

module.exports = {

    async getTweet(req, res) {

        var { filter } = req.params

        return T.get('search/tweets', { q: filter, count: 2 }, async (err, data, response) => {

            console.log('request returned')

            let newTweets = data.statuses.map(status => ({
                createdDate: status.created_at,
                content: status.text,
                language: status.lang,
                hashtags: status.entities.hashtags.map(hash => hash.text),
                user: {
                    language: status.user.lang,
                }
            }))

            //var bulkInsert = store.bulkInsert()

            const session = store.openSession()

            newTweets.forEach(async newTweet => {
                //bulkInsert.store(newTweet)
                await session.store(newTweet, 'tweets/')
            })
            console.log(newTweets)

            await session.store(newTweets[0], 'tweets/')
//192.168.99.100:3001

            //bulkInsert.finish()
            await session.saveChanges()

            return res.json([newTweets, data])
        })
    }
}