let express = require('express');
let router = express.Router();
const nodemailer=require('nodemailer');

// const router =require('express').Router();
 const jwt = require('jsonwebtoken'); 
const bcrypt= require("bcryptjs");
const {requireLogin} = require('../middlewares/auth');
const Post=require('../models/post');
const User = require('../models/user');
const { removeListener } = require('../models/user');
const Notifi=require('../models/notifi');

router.post("/create", async(req,res)=>{
    
    try{
        const {text, reciever}= req.body
        if(reciever.includes(req.body.userId.toString()))return;
    
    const notify=new Notifi({
        text,reciever,user:req.body.userId
    })
    await notify.save()
    return res.json({notify})
}catch(err){
    return res. status(500).json({msg: err.message})
}
})

router.get("/get", async(req,res)=>{
    
    try{
        const notifies= await Notifi.find({reciever:req.body.userId})
        .sort('-createdAt').populate('user','fname')
        console.log(notifies)

        return res.json({notifies})
}catch(err){
    return res. status(500).json({msg: err.message})
}
})

router.put("/read",async(req,res)=>{
    try{
        const notifies = await Notifi.findOneAndUpdate({_id:req.params.id},{
            isRead:trues
        })
        return res.json({notifies})
    }catch(err){
        return res. status(500).json({msg: err.message})
    }
})
module.exports=router;
   
