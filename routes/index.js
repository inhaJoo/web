var express = require('express');
var router = express.Router();

/* page :: Main */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리', pageName:'home.ejs' });
});

module.exports = router;