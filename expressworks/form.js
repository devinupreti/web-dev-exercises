/*
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards.
*/

const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));

app.post("/form", function(req, res) {
  var str = req.body.str;
  var strReversed = str
    .split("")
    .reverse()
    .join("");
  res.send(strReversed);
});

app.listen(process.argv[2]);
