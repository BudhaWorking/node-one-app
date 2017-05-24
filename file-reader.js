var EventEmitter= require("events").EventEmitter;
var emitter = new EventEmitter();

var fs= require("fs");
var path = require("path")
var filePath=  path.join(__dirname + "/sample.txt")
// var filePath=  __dirname + "/sample.txt"
// console.log(__dirname)
console.log(filePath)


emitter.on("start_reading", function(filePath){

	fs.readFile(filePath, "utf-8", function(err, data){
		if(err){
			//console.log(err)
			emitter.emit("error", err)
		}else{
		//console.log(data)
		emitter.emit("print_content", data)
		}
	})

})
emitter.on("print_content", function(data){
		console.log(data)
		emitter.emit("done", "Successfully done reading the file")
})
emitter.on("error", function(message){
	console.log("There is an error")
	console.log("Error details : "+message);
	console.log("Could not read file Successfully");

})
emitter.on("done", function(message){
	console.log(message)
})

emitter.emit("start_reading", filePath);

