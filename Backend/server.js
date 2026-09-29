const express=require("express");
const app=express();
const PORT=3000;
app.get("/",(res,req)=>{
    res.send("server running");
});
app.listen(PORT,()=>{
    console.log("server running");
});