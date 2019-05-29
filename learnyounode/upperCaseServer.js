/*
Program Number : 12
Problem Description : Http Server | recieves POST requests and return body uppercase  
Date : May 28, 2019
Author : Devin Upreti
*/

const http = require("http");
var map = require('through2-map'); // to transform stream data
const portNumber = process.argv[2];

const server = http.createServer( (req, res) => { 
    req.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase();  
    })).pipe(res)   
});

server.listen(portNumber);
