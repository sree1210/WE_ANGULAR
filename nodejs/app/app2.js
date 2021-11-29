//Create API using NODEJS

//import http object
// var http = require('http');

//create node server
// var myServer = http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write('<h3>Connection Successfull.. !!! Welcome to Node Server!!!</h3>');
//     res.end();
// });

// myServer.listen(3000);
// console.log('use url localhost:3000');



var express = require('express');
var app = express();

app.get("/",function(req,res){
    res.send('<h3>Express Connection Success..</h3>'+req.url);
});

app.server = app.listen(3000,function(){
    console.log('Server Started on port 3000');
});




