import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import route from "./Router/userRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT;
const MONGOURL=process.env.URL;

mongoose
    .connect(MONGOURL)
    .then(()=>{
        console.log("Database Connected");
        app.listen((PORT),()=>{
            console.log(`listen ${PORT}`);
        })})
    .catch((err)=>console.log(err));

app.use("/api",route);