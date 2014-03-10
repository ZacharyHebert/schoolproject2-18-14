/*
File:         javascript.js
Purpose:    Contains all external javascript for project. If multiple javascript files are created, edit this purpose.
*/

var randNum=Math.floor((Math.random()*255)+1);

var calculate(decimal){
    
};

// found on javascriptkit.com
function dec2bin(){
    var x = document.getElementById("deci").value;
    
    if ( ( /[^0-9]/g.test(x) ) || x == "" ){
        alert ("You must enter an integer decimal number!");
    }
    
    document.getElementById("deci").value = "";
    
    document.getElementById("deci").focus();
    
    return false;
}


//This is the javascript we used in class, but it needs editing

//define global variables
var theDecimal = 0;
    
function newProblem(){
    theDecimal = Math.floor(Math.random()*256+1);
    document.getElementById("startNumber").innerHTML = theDecimal;
}

function doSomething(){
    var myNumber = document.getElementById("theInput").value;
    var binaryString;
    var tempString = "";
    var carry = 1;
    var count = 7;
    if (isInteger(myNumber)){
    
        //display binary
        binaryString = parseInt(myNumber).toString(2);  
        while(binaryString.length < 8) binaryString = "0"+binaryString;
        tempString = binaryString.substr(0,4).concat("&nbsp;",binaryString.substr(4));
        document.getElementById("binNum").innerHTML = tempString;

        //display ones complement
        tempString="";
        for(var i=0; i<8; i++){
            if(binaryString.charAt(i) === '0') tempString = tempString+"1";
            else tempString=tempString + "0";
        }
    binaryString=tempString;
    tempString="";
    tempString = binaryString.substr(0,4).concat("&nbsp;",binaryString.substr(4));
    document.getElementById("oneComp").innerHTML = tempString;

//display twos complement
    tempString="";
    do{
        if (carry > 0){
            if (binaryString.charAt(count) == 0){
                tempString = "1"+tempString;
                carry = 0;
                }
                else{
                tempString = "0"+tempString;
                }
            }else{
            if(binaryString.charAt(count)== 0) tempString = "0"+tempString;
            else tempString = "1"+tempString;
            }
        count = count - 1;
        }while (count > -1);
        binaryString = tempString;
        tempString="";
        tempString = binaryString.substr(0,4).concat("&nbsp;",binaryString.substr(4));
        document.getElementById("twoComp").innerHTML = tempString;
    }
    else{
    alert("Must be Integer between 0 and 255");
    }
}
function isInteger(n){
    if(isNaN(n)) return 0;
    if (n%1 === 0 && n > -1 && n < 256) return 1;
    return 0;
}


