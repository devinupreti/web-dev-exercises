/*
Create an Express.js app with a home page rendered by the Pug template engine.
The home page should respond to /home.
The view should show the current date using 'new Date().toDateString()'.
*/

const express = require("express");
const path = require("path");
const app = express(); // creates express application

/*
A template engine enables you to use static template files in your application. 
At runtime, the template engine replaces variables in a template file with actual values, 
and transforms the template into an HTML file sent to the client. 

This approach makes it easier to design an HTML page.
*/
app.set("view engine", "pug");
app.set("views", process.argv[3]);

app.get("/home", function(req, res) {
  res.render("index", { date: new Date().toDateString() });
});

app.listen(process.argv[2]);
