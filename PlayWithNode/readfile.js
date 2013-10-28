/**
 * New node file
 */
var fs = require("fs");
console.log("--->>> started loading file...");
fs.readFile("package.json", function(error, data) {
	var content = JSON.parse(data);
	console.log(content);
} );

var boldContent = fs.readFileSync("package.json");
console.log(JSON.parse(boldContent));

