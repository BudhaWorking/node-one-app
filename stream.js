var fs = require("fs");

var filePath = "./sample.txt"
var readble = fs.createReadStream(filePath, {encoding: "utf-8", highWaterMark : 16 * 1024})
var writable = fs.createWriteStream("./samplenew.txt");

readble.on("data", function(chunk){
	console.log(chunk.length)
	writable.write(chunk)

})