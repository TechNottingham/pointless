var express = require('express');
var router = express.Router();

var counter = "60";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hack24 Pointless' });
});

router.get('/counter', function(req, res) {
  res.send(counter);
});

router.post('/counter', function(req, res) {
  console.log(req.body);
  counter = req.body.counter;
  res.status(200);
  res.end();
});

module.exports = router;
