var express = require('express');
var router = express.Router();

/* page :: posting */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '게시글' });
});

module.exports = router;
