import express from "express";
import mongoose from "mongoose";
import router from "./routes/user.routes";
const app=express();
app.use(express.json());

app.use("/api/user",router);
mongoose.connect("mongodb+srv://ARYANJ:Z3cdDHiFGxiTMEmy@blogdb.iui6lvp.mongodb.net/MyDB?retryWrites=true&w=majority")
.then(()=>app.listen(9000))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err));