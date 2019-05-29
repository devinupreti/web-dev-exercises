/*
Program Number : 8
Problem Description : Create a Http Client that prints ALL data from response
Date : May 28, 2019
Author : Devin Upreti
*/

const url  = process.argv[2];
const http = require("http");
// const bl = require("bl"); | Buffer List

var allData = "";
http.get(url, (response) => {
    response.setEncoding("utf8");
    //response.pipe(bl(function (err, data) { console.log(data.toString()) ; })) | Alternative
    
    response.on("data", function (chunk) { allData = allData + chunk; });
    response.on("end", () => { 
        console.log(allData.length);
        console.log(allData); }); 
    response.on("error", console.error);
});


