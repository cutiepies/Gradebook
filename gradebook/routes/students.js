
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rdunks7:Gandalf1@cluster0-7i1kc.mongodb.net/test";

var db = MongoClient.connect(url);


module.exports = router;

///THIS ONE WORKS - just doesnt print to html/ejs file
//MongoClient.connect(url, function(err, db, res) {
//  if (err) throw err;
//  var dbo = db.db("gradebook");
//  dbo.collection("students").find({}).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    //res.json(result);
//    //res.write(result);
//    db.close();
//  });
//});


//THIS ONE kinda broken - tries to print to html but doesnt.. 
/* GET Userlist page. */
router.get('/students', function(req, res) {
    //res.render('students', { title: 'Student!' });
    var dbo = req.db("gradebook");
    //var db = req.db("gradebook");
    //var collection = db.get('students');
    dbo.collection("students").find({},{},function(e,docs){
        //res.json(docs);
        res.render('students', {
            "students" : docs
        });
    });
});



module.exports = router;


