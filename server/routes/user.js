let express = require('express');
let router = express.Router();

// const router =require('express').Router();
 const jwt = require('jsonwebtoken'); 
const bcrypt= require("bcryptjs");
const {requireLogin} = require('../middlewares/auth');


const User = require('../models/user');
router.post('/register', async(req,res)=>{
    const{fname,lname,email,password}=req.body;
    try{
          let user =await User.findOne({email});
        if(user){
            return res.status(400).json({error : 'User already Exist'});
        }
        const hashed_pass=await bcrypt.hash(password, 10);
         user= new User({
             fname,
             lname,
            email,
            password: hashed_pass,
        });
        await user.save();
        return res.status(201).json({ message : "User Created"})
        
    } catch(err){
        console.log(err.message);
    }
    
});
// login

router.post("/login",async(req,res)=>{
    const {email, password}=req.body
    try{
        let user=await User.findOne({email});
        if(!user){
           return res.status(400).json({error : 'User not Exist'});
        }
        const isMatch= await bcrypt.compare(password, user.password)
        if(!isMatch){
        return res.status(400).json({error : 'Wrong Password'});}
        const token=jwt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:"30d"});
        return res.send({user,token});
    }catch(err){
        console.log(err.message);
    }
});

router.get("/", requireLogin, async(req,res)=>{
    console.log(req.user);
   
    try{
        const user=await User.findById(req.user._id).select(".password");
        res.json(user);
    }catch(err){ 
        console.log(err);
    }
})


module.exports=router;
//module.export=router;*/
