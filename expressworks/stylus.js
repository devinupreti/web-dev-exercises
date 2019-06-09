/*
Style the HTML from the "STATIC" exercise using Stylus middleware.

Your solution should listen on the port supplied by process.argv[2] for
GET requests, one of which will be for main.css, which should be
automatically generated by your Stylus middleware. index.html and main.styl 
can be found in process.argv[3] (they are in the same directory).
*/

const express = require("express");
const app = express();

const path = require("path");
const stylus = require("stylus");
const location = process.argv[3]; // index.html and main.styl can be found here

app.use(
  require("stylus").middleware(location || path.join(__dirname, "public"))
);

app.use(express.static(location || path.join(__dirname, "public")));

app.listen(process.argv[2]);