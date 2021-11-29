//Create API using NODEJS

//import http object
var http = require('http');

//create node server
var myServer = http.createServer(function(req,res){
    res.write('Connection Successfull.. !!! Welcome to Node Server with port 3000!!!');
    res.end();
});

myServer.listen(3000);
console.log('use url localhost:3000');