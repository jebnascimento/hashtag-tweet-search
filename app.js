const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const indexRoute = require('./routes/index');
const tweetRoute = require('./routes/tweets');


app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', indexRoute);
app.post('/tweets', tweetRoute);

var port = process.env.port || 3000;
app.listen(port, err => {
    console.log(`Server is listening on port ${port}`);
});
    