var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog App' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Blog App' });
});

router.get('/single-posts', function(req, res, next) {
  res.render('single-posts', { title: 'Blog App' });
});

router.get('/user_posts', function(req, res, next) {
  res.render('user_posts', { title: 'Blog App' });
});

module.exports = router;
