/* 
Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, i.e., process.argv[2].
*/

const express = require("express");
const app = express(); // creates express application

app.get("/home", function(req, res) {
  res.end("Hello World!");
});

app.listen(process.argv[2]);
