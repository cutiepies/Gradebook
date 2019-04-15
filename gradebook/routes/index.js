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

/* POST to check login*/
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('students');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There information you entered is not correct.");
        }
        else {
            // And forward to success page --> student login
            res.redirect("students");
        }
    });

});


module.exports = router;
