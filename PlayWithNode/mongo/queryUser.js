/**
 * New node file
 */
var mongo = require("mongodb");
console.log("loaded...!!!");

var host="127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;

console.log("Port is ", port);

var db = new  mongo.Db("node-intro-test", new mongo.Server(host, port, {}), {safe:false});

db.open(function(error) {
		console.log("Connection successfully opened..!!");
		
		// create a database if not exists :: Collection.
		
		db.collection("user", function (error, collection){
			console.log("we have the collection :: ", collection.collectionName);
			
			   collection.find({"id":"1"}).toArray(function(err, items) { console.log(items);  });			
		});
		
});
