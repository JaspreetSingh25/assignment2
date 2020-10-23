var mongo = require('mongodb');
var mongoose = require("mongoose");


//connection to DB
var connectdb = () => {
    return 
}



module.exports = {

connectdb,
fetchuserinfo: function(email) {
    return MongoClient.connect(url, function(err, db) {
        if (err) console.log(err);
        var dbo = db.db("assignment");
       
        console.log(e, p);
        var query = {email :e}
    
        dbo.collecvar mongo = require('mongodb');
var mongoose = require("mongoose");


//connection to DB
var connectdb = () => {
    return 
}



module.exports = {

connectdb,
fetchuserinfo: function(email) {
    return MongoClient.connect(url, function(err, db) {
        if (err) console.log(err);
        var dbo = db.db("assignment");
       
        console.log(e, p);
        var query = {email :e}
    
        dbo.collection('users').findOne(query, function(err, res) {
            db.close();
            if(err) return callback(err, null)
            return callback(null, res)

    });

})

},
    
 logincheck: function(e, p, callback) {

    return MongoClient.connect(url, function(err, db) {
        if (err) console.log(err);
        var dbo = db.db("assignment");
        //console.log("Database created!");
        console.log(e, p);
        var query = {email: e, password: p};
    
        dbo.collection('users').findOne(query, function(err, res) {
            db.close();
            if(err) return callback(err, null)
            
            return callback(null, res.email)

    });

}) }

}



