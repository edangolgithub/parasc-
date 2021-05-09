var fs = require("fs");

exports.syncread= function syncread()
{
var data = fs.readFileSync('a.txt');
console.log(data.toString());
console.log("Program Ended");
return data;

}
exports.asyncread= function asyncread()
{
var data = fs.readFileSync('a.txt');
console.log(data.toString());
console.log("Program Ended");
return data;

}