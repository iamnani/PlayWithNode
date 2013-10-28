/**
 * New node file
 */
var mongo = require("mongodb");
console.log("loaded...!!!");

var host="127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;

console.log("Port is ", port);

var db = new  mongo.Db("node-intro-test", new mongo.Server(host, port, {}), {safe:false});

db.open(function(error, db) {
	console.log("Connection successfully opened..!!", error);

	// create a database if not exists :: Collection.
	db.createCollection("user", function(error, collection){
		db.collection("user", function (error, collection){
			console.log("we have the collection :: ", collection.collectionName);

			collection.insert({id: "1", name:"Naveen Jakkani", email:"naveen@nj.com"} ,function(){
				console.log("successfully inserted naveen");
			});
			collection.insert({id: "2", name:"Deepika Jakkani", email:"deepika@nj.com"},function(){
				console.log("successfully inserted Deepika");
			});
			collection.insert({id: "3", name:"Jakkani", email:"nani@nj.com"},function(){
				console.log("successfully inserted nani.");
			});

			console.log("data inserted..!!!");

			collection.find(function(error, cursor){
				cursor.toArray(function(error, users) {
					console.log("checking items...", users);
				});
			});
			
			
			//db.close();

		});
	});

});

