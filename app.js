const express = require('express');
const twit = require("twit")
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {welcomeMessage: "Bem-vindo lindão"});
});


app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});

