
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://username:password@cluster0-7i1kc.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("gradebook");
  dbo.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


/* GET Userlist page. */
router.get('/students', function(req, res) {
    var db = req.db;
    var collection = db.get('students');
    collection.find({},{},function(e,docs){
        res.render('students', {
            "students" : docs
        });
    });
});

/*
//** GET Userlist page. 
router.get('/studentlist', function(req, res) {
    var db = req.db;
    var collection = db.get('students');
    collection.find({},{},function(e,docs){
        res.render('studentlist', {
            "studentlist" : docs
        });
    });
})
*/


module.exports = router;


