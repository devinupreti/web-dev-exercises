/*
Program Number : 7
Problem Description : Create a Http Client that prints data in response
Date : May 28, 2019
Author : Devin Upreti
*/

const http = require("http");
const url  = process.argv[2];

// response object is a node stream object
// You can treat Node Streams as objects that emit events
// important events -> "data", "error", "end"
http.get(url, (response) => {
    response.setEncoding("utf8");
    response.on("data", function (data) { console.log(data); });
    response.on("error", console.error);
}).on("error", console.error);
