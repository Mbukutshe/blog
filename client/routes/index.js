var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Express' });
});

router.get('/single-posts', function(req, res, next) {
  res.render('single-posts', { title: 'Express' });
});

router.get('/user_posts', function(req, res, next) {
  res.render('user_posts', { title: 'Express' });
});

module.exports = router;
