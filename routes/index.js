const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {hashtag: null, tweets: null})
});

module.exports = router;