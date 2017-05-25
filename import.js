//var string="hello I from IMport";

var wish = function(){
	return  "Hello GoodMorning"+ name;
}

var displayMessage = function(){
	return  "This is display message";
}
//module.exports = string;
/*module.exports = {

		wish : wish,
		display: displayMessage
};*/

/*module.exports = function(){
	return "This is my new function"
}*/

module.exports.display = function(){
	return "This is my new function"
}