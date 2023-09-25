const express =require("express");
const { connect } = require("./connection");
const { Router } = require("./routes");


const app=express()
connect();
app.use("/",Router)
app.listen(1234,()=>{
    console.log("started");
});