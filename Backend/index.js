// const express = require('express');
// const dotenv=require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose"
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
import bookRoute from "./route/Book.route.js"
import userRoute from "./route/user.route.js"
const PORT=process.env.PORT ||4000;

const URI=process.env.MongoDBURI;
// connect to the Mongodb
try{
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("connect to the mongodb");
}catch(error){
console.log("Error:",error);
}
////defining route
app.use("/book",bookRoute)
app.use("/user",userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})