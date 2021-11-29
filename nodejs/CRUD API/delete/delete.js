
//this file acting as module (delete)
//delete module accepts the id from angular
//delete module compares id with "mongodb" database
//delete module delete the matching recocrd

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let del  = require("express").Router().delete("/:email",(req,res)=>{
   
    talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("employee").deleteOne({email:req.params.email}, (err, result)=> {
                      
                    if (err) 
                        throw err;
                        else
                        res.send({message:"1 document deleted"});
                        db.close();
                      });
                    }
                });
                });

module.exports = del;









