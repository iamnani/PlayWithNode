/**
 * New node file
 */

var http = require("http");

console.log("Server packages loaded...");

var server = http.createServer(function(request, response) {
	console.log('request is here..!! :-D');
	console.log(request.url);
	response.writeHead(200, {"Content-type" : "text/plain"});
	response.write("Firsr Server created..!!!");
	response.end();
});

server.listen(1111, "127.0.0.1", function(data){
	
	console.log("listening at port  1111");
	
});
