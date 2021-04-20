const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const bcrypt = require("bcryptjs");
dotenv.config({path:'./config.env'});
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));
const User = require("./model/userSchema");

const PORT = process.env.PORT;
const middleware = (req,res, next) => {
    console.log(`Hello my middleware`);
    next();
}

//middleware();


app.get("/",(req,res)=>{
    res.send("Hello world from serverr");
});

app.get('/about', middleware, (req,res)=>{
    console.log("hello my about");
    res.send("Hello world from about server");
});

app.get("/contact",(req,res)=>{
    res.send("Hello world from contact server");
});
app.get("/signin",(req,res)=>{
    res.send("Hello world from signin server");
});
app.get("/signup",(req,res)=>{
    res.send("Hello world from signup server");
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})