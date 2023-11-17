var express = require('express');
var router = express.Router();

/* page :: posting */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'posts/list.ejs'});
});

/* page :: posting */
router.get('/insert', function(req, res, next) {
  res.render('index', { title: '글쓰기', pageName:'posts/insert.ejs'});
});

module.exports = router;
