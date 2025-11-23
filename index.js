const express = require("express");

const port = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Api working...");
});

app.get("/api/get",(req,res)=>{
    res.send({message:"Hello back to nodejs"});
});

app.get("/api/get1",(req,res)=>{
    res.send({message:"Hello ci/cd is working"});
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});