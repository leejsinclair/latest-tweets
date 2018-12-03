var latestTweets = require('./index.js')

latestTweets('GWSGIANTS', function (err, tweets) {
  console.log(tweets)
})