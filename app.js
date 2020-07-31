const express = require('express');
const twit = require("twit");
const bodyParser = require('body-parser')
var config = require('./config.js');  
const port = 8000;
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    var Tweet = new twit(config);

    Tweet.get('search/tweets', {
        q: '#got',
        count: 10,
        result_type: "mixed" 
    }).catch(function (err) {
        console.log('caught error', err.stack)
    }).then(function (result) {
        console.log('data', result.data);
    });
    res.render('index');
});

app.post('/', function (req, res) {
    console.log(req.body.hashtag);
    if (req.body.hashtag !== undefined) {
      res.render('index',  {hashtag: req.body.hashtag})
    }
    res.render('index',  {hashtag: null})
    
  });


app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});

