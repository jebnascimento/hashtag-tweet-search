const express = require('express');
const router = express.Router();
const twit = require("twit");
var auth = require('../configs/twitterAuth');
search = require('../configs/searchParams');


router.post('/tweets', function (req, res) {

if (req.body.hashtag !== null) {

    let Twitter = new twit(auth);

        Twitter.get('search/tweets', {
            q: req.body.hashtag, // use the user posted hashtag value as the query
            count: search.count,
            result_type: search.result_type,
            lang: search.lang,
            tweet_mode:search.tweet_mode,
            include_entities: search.include_entities,
            place_country: search.place_country

        }).catch(function (err) {

            console.log('caught error', err.stack)
        
            res.render('index', {
            hashtag: null,
            tweets: null,
            error: err.stack
            });

        }).then(function (tweets) {
            res.render('index', {
            hashtag: req.body.hashtag, 
            tweets: tweets.data,
            error: null
            });
        });
    }
});

module.exports = router;
