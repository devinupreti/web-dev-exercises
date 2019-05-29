/*
Program Number : 11
Problem Description : Http Server | serves the same text file for each request it receives.  
Date : May 28, 2019
Author : Devin Upreti
*/

const http = require("http");
const fs = require("fs");

const portNumber = process.argv[2];
const fileLocation = process.argv[3];

// var src = fs.createReadStream(fileLocation);
// Both request and response are also Node streams!
const server = http.createServer( (req, res) => { 
    fs.createReadStream(fileLocation).pipe(res);
});

server.listen(portNumber);
