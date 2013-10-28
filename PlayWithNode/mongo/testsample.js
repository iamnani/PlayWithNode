

var mongo = require('mongodb'),
Server = mongo.Server,
Db = mongo.Db;
var server = new Server('127.0.0.1', 27017);
var db = new Db('exampleDb', server,  {safe:false});
/*db.open(function(err, db) {
	  if(!err) {
	    db.collection('test', function(err, collection) {});
	    db.collection('test', {safe:true}, function(err, collection) {});
	    db.createCollection('test', function(err, collection) {});
	    db.createCollection('test', {safe:true}, function(err, collection) {});
	  }
	});*/


db.open(function(err, db) {
	console.log("open..!!" , err);
	  if(!err) {
		  console.log('hadhhadfa');
	    db.createCollection('test1', function(err, collection) {
	    	console.log('new collection');
	    	
	      var doc1 = {'hello':'doc1'};
	      var doc2 = {'hello':'doc2'};
	      var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
	      collection.insert(doc1);
	      collection.insert(doc2, {safe:true}, function(err, result) {});
	      collection.insert(lotsOfDocs, {safe:true}, function(err, result) {});
	      
	      
	      console.log("Finding//");
	      collection.find().toArray(function(err, items) { console.log(items)});
	      
	    });
	  }
	  
	 // db.close();
	});