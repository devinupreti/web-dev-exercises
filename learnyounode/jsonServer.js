/*
Program Number : 13
Problem Description : Http Server | recieves POST requests and return body uppercase  
Date : May 28, 2019
Author : Devin Upreti
*/
const http = require("http");
const url = require('url');
const portNumber = process.argv[2];

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

// Server Implementation
const server = http.createServer( (req, res) => {
  parsedUrl = url.parse(req.url, true);
  resource = routes[parsedUrl.pathname];
  if (resource) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(resource(parsedUrl))); // function called 
  }
  else {
    // Invalid Input 
    res.writeHead(404);
    res.end();
  }
});

server.listen(portNumber);
