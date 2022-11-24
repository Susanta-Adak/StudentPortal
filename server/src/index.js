import express from "express";
import studentRouter from "./routes/studentRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin/students", adminRouter);
app.use("/admin", adminRouter);
app.use("/student", studentRouter);


app.get("/",(req, res)=>{
    res.send("Notes REST API.");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, (err)=>{
        if(err) throw err;
        console.log("Server started on port: "+ PORT);
    })
})
.catch((err)=>{
    console.log(err);
})
