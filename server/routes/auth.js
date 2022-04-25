let express = require('express');
let router = express.Router();
const nodemailer=require('nodemailer');

const logger=require('../logger/winstonLogger')

// const router =require('express').Router();
 const jwt = require('jsonwebtoken'); 
const bcrypt= require("bcryptjs");
const {requireLogin} = require('../middlewares/auth');
const Post=require('../models/post');

const User = require('../models/user');


let transporter= nodemailer.createTransport({
    service:'gmail',
    
    auth:{
        
        user: 'akshyabhada204@gmail.com',
        pass:'Nodemail@07'

    }
});





//login
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
        logger.log('info','user logged in')
        return res.send({user,token});
    }catch(err){
        console.log(err.message);
    }
});

//register

router.post('/register', async(req,res)=>{
    console.log(req.body)
    const fname=req.body.fname
    const lname=req.body.fname
   const email=req.body.email
    const password=req.body.password
   
    try{
          let user =await User.findOne({email});
        if(user){
            return res.status(400).json({error : 'User already Exist'});
        }
        const hashed_pass=await bcrypt.hash(password, 10);
         user= new User({
             fname:req.body.fname,
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
module.exports=router; 