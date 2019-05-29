/*
Program Number : 2
Problem Description : Add given Params
Date : May 26, 2019
Author : Devin Upreti
*/

console.log(process.argv);

// process is a global object
const params = process.argv;

// arguments are read in as strings
// argv[0] is node path, argv[1] is file path
// You can also use : const args = process.argv.slice(2)
var result = 0;
for (var i = 2; i < params.length; i++){
    result += parseInt(params[i]);
}

console.log(result);

