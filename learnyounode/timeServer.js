/*
Program Number : 10
Problem Description : TCP time Server | For each connection you must write the current date & 24 hour time
Date : May 28, 2019
Author : Devin Upreti
*/

const portNumber = process.argv[2];
const net = require("net");

/*
The socket object contains a lot of meta-data regarding the connection,  
but it is also a Node duplex Stream, in that it can be both read from, and  
written to.

Use socket.write(data) to write data to the socket and socket.end() to  
close the socket. 

Alternatively, the .end() method also takes a data  
object so you can simplify to just: socket.end(data).  

FORMAT : "YYYY-MM-DD hh:mm"
*/

function now(){
    var date = new Date();
    var year = date.getFullYear();  
    var month = date.getMonth();   // starts at 0  
    month = (parseInt(month) + 1).toString();
    if (month.length < 2) { month = "0" + month; }

    var day = date.getDate();      // returns the day of month  
    var hour = date.getHours();
    var min = date.getMinutes().toString();
    if (min.length < 2) { min = "0" + min; }

   var data = year.toString() + "-" + month + "-" + day.toString() + " " + hour.toString() + ":" + min + "\n";
   return data
}

const server = net.createServer( function listener (socket) {
  socket.end(now());
});

server.listen(portNumber);