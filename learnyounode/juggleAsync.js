/*
Program Number : 9
Problem Description : Create a Http Client that prints ALL data from response of 3 URLs
Date : May 28, 2019
Author : Devin Upreti
*/

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
        return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
        printResults()
        }
    }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}


// Naive Approach - Sequencing 
/*
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const http = require("http");

function response3 (response) {
    var allData = "";
    response.setEncoding("utf8");
    response.on("data", function (chunk) { allData = allData + chunk; });
    response.on("end", () => { 
        console.log(allData); 
    }); 
    response.on("error", console.error);
}

function response2 (response) {
    var allData = "";
    response.setEncoding("utf8");
    response.on("data", function (chunk) { allData = allData + chunk; });
    response.on("end", () => { 
        console.log(allData); 
        http.get(url3, response3);
    }); 
    response.on("error", console.error);
}

http.get(url1, (response) => {
    var allData = "";
    response.setEncoding("utf8");
    response.on("data", function (chunk) { allData = allData + chunk; });
    response.on("end", () => { 
        console.log(allData); 
        http.get(url2, response2);
    }); 
    
    response.on("error", console.error);
});
*/
