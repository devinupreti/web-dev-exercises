/*
Program Number : 3
Problem Description : Read file synchronously and print number of new lines
Date : May 26, 2019
Author : Devin Upreti
*/

const fs = require("fs");
var newLines;

try {
    const file = process.argv[2];
    var buf = fs.readFileSync(file);
    var fileStr = buf.toString();
    newLines = fileStr.split("\n");
    console.log(newLines.length - 1);    
}
catch(error){
    console.log("Operation Failed");
}