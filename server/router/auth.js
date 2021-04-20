const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../model/userSchema");


router.get("/",(req,res)=>{
    res.send("Hello world from router js");
});
// Using promises

// router.post("/signup",(req,res)=>{
//     const{name,email,phone,work,password,cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "please fill all required field"});
//     }
//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"Saved Successfully"});
//         }).catch((err)=>res.status(500).json({error:"Failed to save."}));
        
//     }).catch(err=>{
//         console.log(err);
//     });
//     // console.log(req.body);
//     // res.json({message : req.body});
// })

router.post("/signup", async(req,res)=>{
    const{name,email,phone,password,cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error: "please fill all required field"});
    }
    try{
         const userExist = await User.findOne({email:email});
         if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }else if(password != cpassword){
            res.status(422).json({error:"Passwords are not matched"});
        }else{
            const user = new User({name,email,phone,password,cpassword});
            await user.save();
            res.status(201).json({message:"Saved Successfully"});
        }
        

        // if(userRegister){
        //     res.status(201).json({message:"Saved Successfully"});
        // }else{
        //     res.status(500).json({error:"Failed to save."});
        // }
    }catch(err){
        console.log(err);
    }
});


//Login Route

router.post("/signin",async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"Awesome"});
    try{
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json({error:"Invalid emmail or password"});
        }
        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const passMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwttoken",token,{
                expires: new Date(Date.now() +25892000000),
                httpOnly:true
            });
            if(!passMatch){
                console.log(userLogin);
                res.status(400).json({error:"Invalid password"});
            }else{
                console.log(userLogin);
                res.status(200).json({message:"User Logedin success"});
            }
        }else{
            res.status(400).json({error:"Invalid email"});
        }

    }catch(err){
        console.log(err); 
    }
});

router.get("/userDetails", async(req,res)=>{
    try{
        const userData = await User.find(); 
        res.status(201).send(userData);
    }catch(e){
        res.status(400).send(e);
    }
});

router.delete("/deleteUser/:id",async(req,res)=>{
    try{
        //const _id = req.params.id;
        const deleteByid = await User.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }else{
            res.status(201).send(deleteByid);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;

