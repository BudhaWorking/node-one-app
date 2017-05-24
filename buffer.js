var buffer = new Buffer("Hello")

console.log(buffer)
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write("Good Morning");
console.log(buffer.toString())

var buffer1 = new Buffer("Abhishek")

console.log(buffer1)
console.log(buffer1.toString())
console.log(buffer.toJSON());