const express = require("express");

const port = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Api working...");
});

app.get("/api/get",(req,res)=>{
    res.send({message:"Hello back to nodejs"});
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});