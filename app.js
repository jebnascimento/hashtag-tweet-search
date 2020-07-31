const express = require('express');
const twit = require("twit");
const bodyParser = require('body-parser')
var config = require('./config.js');  
const port = 3000;

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', {hashtag: null, tweets: null})
});

// app.get('/location', (req, res) => {
//     let Twitter = new twit(config);
//     Twitter.get('geo/search', {
//     query: 'brazil'
//     }).catch(function (err) {
//     console.log('caught error', err.stack)
//     }).then(function (result) {
//         console.log('data', result.data);
//     });
// });


app.post('/', function (req, res) {

    if (req.body.hashtag !== null) {
  
        let Twitter = new twit(config);
  
        Twitter.get('search/tweets', {
            q: req.body.hashtag, // use the user posted hashtag value as the query
            count: 30,
            result_type: "recent",
            lang: "pt"
    
        }).catch(function (err) {
            console.log('caught error', err.stack)
            res.render('index', {
                hashtag: null,
                tweets: null,
                error: err.stack
            });
        }).then(function (result) {
            // Render the index page passing in the hashtag and the Twitter API results
            res.render('index', {
                hashtag: req.body.hashtag, 
                tweets: result.data,
                error: null
            });
        });
    }
  });

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
    