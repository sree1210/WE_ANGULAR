//node starts the execution from server.js file
//this file acting as main server file
//this file used to collabrate the modules
//@login  @register  @update    @delete

//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");

let cors = require("cors");

//create the rest object
let app = express();
//enable the ports communication

app.use(cors());

//set the JSON as MIME Type
app.use(bodyparser.json());
//read the json
app.use(bodyparser.urlencoded({extended:false}));

//use login module
app.use("/login",require("./login/login"));
//use register module
app.use("/register",require("./register/register"));
//use register module
app.use("/update",require("./update/update"));
//use register module
app.use("/delete",require("./delete/delete"));

//use fetch module
app.use("/fetch",require("./fetch/fetch"));


//assign the port no
app.listen(3000);
console.log("server listening the port no.3000");