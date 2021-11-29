var express = require('express');
var app = express();
var dataFile = require('../data/data.json');

app.get("/",function(req,res){
    res.send('<h2>Welcome to Routing Home Page...!!</h2>');
}); //end of App

app.get("/employees",function(req,res){
    var info='';
    dataFile.employees.forEach(function(item){
        info +=`
        <li>
        <h3>${item.id}</h3>
        <h3>${item.name}</h3>
        <h3>${item.salary}</h3>
        `;
       }); //end of for Loop
       res.send(info);
   }); //end of App

   app.get("/employees/:empId",function(req,res){
        var emplolyee = dataFile.employees[req.params.empId];
        res.send(`
        <h3>${emplolyee.id}</h3>
        <h3>${emplolyee.name}</h3>
        <h3>${emplolyee.salary}</h3> 
        `);
   });
app.server = app.listen(3000,function(){
    console.log('Server Started on port 3000');
});
