import express from "express";
import MapData from "../Models/userModel.js";
const route = express.Router();

route.post("/map",(req,res)=>{
    const {latitude,longitude}=req.body;
    MapData.create({altitude:latitude,longitude:longitude});
});
route.get   ("/display",(req,res)=>{
    console.log("Response from server");
    MapData.find({})
    .then((loc)=>res.json(loc))
    .catch((err)=>res.status.json(loc));
});
export default route;