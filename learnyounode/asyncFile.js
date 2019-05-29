/*
Program Number : 4
Problem Description : Read file asynchronously and print number of new lines
Date : May 27, 2019
Author : Devin Upreti
*/

const fs = require("fs");
var newLines;

try {
    const file = process.argv[2];

    // fs.readFile(file, 'utf8', callback) can be used to directly get string
    fs.readFile(file, (err, buf) => {
        var fileStr = buf.toString();
        newLines = fileStr.split("\n");
        console.log(newLines.length - 1);
    });
        
}
catch(error){
    console.log("Operation Failed");
}