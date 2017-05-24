var express = require("express");
var app = express();
var router = express.Router();

router.get("/", function(request, response){
	response.json({message: "Hello Bangaluru!!"})
})

router.get("/user1", function(request, response){

	response.json({ message : "this is user endpoint"})
})

router.get("/customer", function(request, response){

/*	var customer = [
		{name: 'Navin',age: 35},
		{name: 'Abhishek',age: 25}
	]*/
	var product = [
		{name: 'Sony',price: 3500},
		{name: 'Apple',price: 50000}
	]
	//response.json(customer)
	response.json(product)
})
app.use("/api", router)

var PORT = process .env. PORT || 1337

app.listen(PORT, function(){

	console.log("Server listening at PORT 1337!!!"+ PORT)
})