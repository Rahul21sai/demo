
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRouter");

const app = express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://rahul:21112003@cluster0.s2gsvgz.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("error occured"));

app.use("/studentRouter",studentRoute);

app.listen(4000,()=>{
    console.log("server started at 4000");
})