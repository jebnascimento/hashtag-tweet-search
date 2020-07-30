const express = require('express');
const twit = require("twit");
var config = require('./config.js');  
const port = 3000;
const app = express();


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var T = new twit(config);

    T.get('search/tweets', {
        q: '#100DaysOfCode',
        count: 10,
        result_type: "mixed" 
    }).catch(function (err) {
        console.log('caught error', err.stack)
    }).then(function (result) {
        console.log('data', result.data);
    });
    res.render('index', {welcomeMessage: "Bem-vindo lindão"});
});


app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});

