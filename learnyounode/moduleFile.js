/*
Program Number : 6
Problem Description : Create a module file
Date : May 28, 2019
Author : Devin Upreti
*/

const myModule = require("./fileExt");
const dirPath = process.argv[2];
const extension = process.argv[3];

function myCallback(err, data){
    if (err) { console.error(err); }
    
    if (data != null || data != undefined || data.length > 0){ 
        for (var i = 0; i < data.length; i++)
        { console.log(data[i]); }
    }
}

myModule(dirPath, extension, myCallback);