var express = require('express');
var router = express.Router();

/////* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
///* GET GRADEBOOK homepage. */
router.get('/gradebook', function(req, res, next) {
  res.render('gradebook', { title: 'Gradebook App!' });
});


module.exports = router;
