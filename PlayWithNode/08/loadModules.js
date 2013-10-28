var git = require("./github.js");

git.getRepos("iamnani", function(data){
	console.log(data);
	
	var j = JSON.parse(data);
	console.log(j[0]);
});