/*
File: 		javascript.js
Purpose:	Contains all external javascript for project. If multiple javascript files are created, edit this purpose.
*/

var randNum=Math.floor((Math.random()*255)+1);
var calculate(decimal){
	
};
function dec2bin() { // found on javascriptkit.com
var x = document.getElementById("deci").value;
if ((/[^0-9]/g.test(x)) || x == "") {
alert ("You must enter an integer decimal number!");
document.getElementById("deci").value = "";
document.getElementById("deci").focus();
return false;
}
