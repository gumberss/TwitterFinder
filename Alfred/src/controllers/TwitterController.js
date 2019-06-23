var Twit = require('twit')

var twitterRepository = require('../data-persistence/data-access/twitter')

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

            return twitterRepository
                .insertMany(newTweets)
                .then(() => res.json([newTweets, data]))
                .catch(e => console.log(e))
        })
    },
    async getAll(req, res) {

        return twitterRepository
            .getAll()
            .then(twitters => res.json(twitters))
            .catch(e => console.log(e))
    }
}