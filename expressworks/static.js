/*
This exercise is about serving static assets like HTML files.
There are many ways to do it, but we want you to apply static middleware to serve the file index.html.

Please don't use ANY routes like app.get. ONLY static.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3].
*/

const express = require("express");
const app = express(); // creates express application

// function signature
// - express.static(root, [options])
app.use(express.static(process.argv[3] || path.join(__dirname, "public"))); // fall back to path to "public" if arg[3] not provided

app.listen(process.argv[2]);
