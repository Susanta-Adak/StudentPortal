import express from "express";
import studentRouter from "./routes/studentRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import adminSigninRouter from "./routes/adminSigninRoutes.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.json());

app.use("/admin/students", adminRouter);
app.use("/admin", adminSigninRouter);
app.use("/student", studentRouter);

app.get("/", (req, res) => {
    res.send("Student Poartal REST API.");
})

app.use(errorHandler);
app.all("*", (req, res, next) => {
    res.status(400).json({ message: "Page not found" });
})
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log("Server started on port: " + PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })
