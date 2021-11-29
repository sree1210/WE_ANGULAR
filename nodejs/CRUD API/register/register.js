//this file acting as module (login)
//login module accepts the loginId&password from angular
//login module compares with "mongodb" database


let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
    console.log(req.body);
        talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
        {
            if(err)
                throw err;
            else{
    db.collection("employee").insertOne({"empName":req.body.empName,"salary":req.body.salary,"email":req.body.email,"gender":req.body.gender,"password":req.body.password,"joinDate":req.body.joinDate},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });
        });
module.exports = register;