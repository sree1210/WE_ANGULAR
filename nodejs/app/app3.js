var express = require('express');
var app = express();

app.get("/",function(req,res){
    res.send('<h3>Express Connection Success..</h3>'+req.url);
});

app.server = app.listen(3000,function(){
    console.log('Server Started on port 3000');
});

