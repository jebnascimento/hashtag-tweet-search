const express = require('express');
const router = express.Router();
const twit = require("twit");
var auth = require('../configs/twitterAuth');  


router.post('/tweets', function (req, res) {

if (req.body.hashtag !== null) {

    let Twitter = new twit(auth);

        Twitter.get('search/tweets', {
            q: req.body.hashtag, // use the user posted hashtag value as the query
            count: 30,
            result_type: "recent",
            lang: "pt",
            tweet_mode:'extended',
            include_entities: true,
            place_country: 'br'

        }).catch(function (err) {

            console.log('caught error', err.stack)
        
            res.render('index', {
            hashtag: null,
            tweets: null,
            error: err.stack
            });

        }).then(function (tweets) {

            console.log('data', tweets.data);

            res.render('index', {
            hashtag: req.body.hashtag, 
            tweets: tweets.data,
            error: null
            });
        });
    }
});

module.exports = router;
