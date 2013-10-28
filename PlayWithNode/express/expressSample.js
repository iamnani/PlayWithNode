/**
 * New node file
 */
var exp = require("express");
console.log('file loaded..!!');

var port =1337;
var host = "127.0.0.1";

var app = exp();

app.use(app.router);

app.get("/", function(request, response){
	response.send("First request.!! Hello... :)");
});

app.get("/demo/:param1/:param2", function(request, response){
	console.log("params :: ", request.params);
	response.send(">>> we have 2 params.");
});


console.log("server is started listening on port : " + port);
app.listen(port, host);