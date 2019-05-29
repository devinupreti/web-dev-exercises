/*
Program Number : 5 
Problem Description : Get files in path with extension
Date : May 28, 2019
Author : Devin Upreti
*/

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
const extension = "." + process.argv[3];

function withoutModular() {
fs.readdir(filePath, (err, files) => {
    if (err) { return console.error(err); }
    
    for (var i = 0; i < files.length; i++){
        if (path.extname(files[i]) == extension)
        { console.log(files[i]); }
    }
}); }
// withoutModular();


// Making it modular
function readFiles(dirPath, ext, callback) {
    fileExtension = "." + ext;
    fs.readdir(dirPath, (err, files) => {
        if (err) { return callback(err); }
        
        var myList = [];
        for (var i = 0; i < files.length; i++){
            if (path.extname(files[i]) == fileExtension)
            { //console.log(files[i]); 
              myList.push(files[i]);
            }
        }
        callback(null, myList); // implementation for user according to usage
    });
}

module.exports = readFiles;