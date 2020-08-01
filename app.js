const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

const indexRoute = require('./routes/index');
const tweetRoute = require('./routes/tweets');


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', indexRoute);
app.post('/tweets', tweetRoute);


app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
    