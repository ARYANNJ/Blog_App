import express from "express";
import mongoose from "mongoose";
const app=express();

mongoose.connect("mongodb+srv://ARYANJ:Z3cdDHiFGxiTMEmy@blogdb.iui6lvp.mongodb.net/MyDB?retryWrites=true&w=majority")
.then(()=>app.listen(8000))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err));