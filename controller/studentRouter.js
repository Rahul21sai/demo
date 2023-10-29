const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if (err) 
         return err;
        else
        res.json(data);
    })
})
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
           res.json(data);

    })

})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentRoute.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);    
    })
})

.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    { $set: req.body }, (err, data) =>{
        if(err)
              return err;
        else
            res.json(data); 
    })   

})
studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove({_id : mongoose.Types.ObjectId(req.params.id)},(err,data)=>{
        if(err)
        return err;
        else
            res.json(data);
    })
})
//http://localhost:4000/studentRouter/update-student/653d48611d942fd1686d8b74



module.exports = studentRoute;