
//this file acting as module (update)
//update module accepts the id,name,loginId&password from angular
//update module compares id in "mongodb" database and update the row


let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().put("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
        {
            if(err)
                throw err;
            else{                
var newvalues = { $set: {name:req.body.name, salary:req.body.salary} };
                db.collection("employee").updateOne({loginId:req.body.loginId},newvalues, (err, result)=> {
                        if (err) 
                        throw err;
                        else
                        res.send({message:"1 document updated"});
                        db.close();
                      });
                    }
                });
              });

module.exports = update;

