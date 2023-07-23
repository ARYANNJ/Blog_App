import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user.routes";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect("mongodb+srv://ARYANJ:Z3cdDHiFGxiTMEmy@blogdb.iui6lvp.mongodb.net/MyDB?retryWrites=true&w=majority")
.then(()=>app.listen(9000))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err));