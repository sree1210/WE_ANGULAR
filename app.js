var express = require('express');
var app = express();


app.get("/",finction(req,res){
res.send('<h1>connection meetups</h1>');
});
app.server = app.listen(3000,function(){
	console.log('server listening');
});


//var http = require('http');
//var myServer = http.createServer(function(req, res){
//  res.writeHead(200,{"Content-Type":"text/html"});
//  res.write('<h1>connection meetups</h1>');
//  res.end();
//});
//myServer.listen(3000);
//console.log('go to port 3000');