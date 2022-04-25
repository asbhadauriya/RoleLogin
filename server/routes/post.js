let express = require('express');
let router = express.Router();
const nodemailer=require('nodemailer');

const Categories=require('../models/categories')

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


router.post("/create", async(req,res)=>{
    console.log("create works");
    const{title,desc,category,userId}=req.body
    
    //console.log(user);
    const currentuser=await User.findById(req.body.userId);

    const body= new Post({
    title,
    desc,
    userId,
    category
});
                                            
                                            
    try{
        
   
        // const{password,updatedAt, ...other}=currentuser._doc
        
        const name=currentuser.fname;
        

       
        const spost= await body.save();

        const freinds = await Promise.all(
            currentuser.subscriber.map((fId)=>{
                return User.findById(fId);
            })
        );
        let flist = [];

        freinds.map((f)=>{
            
            flist.push(f.email);
        })
        console.log(flist);
    

        let mailOptions = {
            from: '"Node mailer" <noreply@gmail.com>',
            to: flist,
            subject: 'New Post',
            text:'New Post from',
            html:'<p>your freind ${name}</p>'
            
        }
        transporter.sendMail(mailOptions, function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });

    
        return res.status(200).json(spost);
    }catch(error){
        res.status(500).json(error);
        console.log(error);
    }
});

router.get("/Allposts", async(req,res)=>{
    console.log(" works");
    
    
    try{
        console.log(" works2");
        const post=await Post.find({})
         res.status(200).json(post);
    }catch(error){
        res.status(500).json(error);
    }
});

router.delete("/delete/:id",async(req,res)=>{
    console.log("hello from delete")
    try{
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId)
        {console.log("here is error")
            try{
            await post.delete()
            res.status(200).json('post deleted ucessfully');
    

        }catch(error){
            
            res.status(500).json(error);
        }
    }
    else{
        res.status(401).json("you can not delete this post");
    }
      
    }catch(error){
        res.status(500).json(error);
    }
});

router.put("/updatepost", async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        await Post.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json('post updated successfully');
    }catch(error){
        res.status(500).json(error);
    }
});
//get post
router.get("/post/:id",async(req,res)=>{
    
    try{
        const post= await Post.findById(req.params.id);
       return res.status(200).json(post);
    }catch(error){
        return res.status(500).json(error);
    }
})


//get  post
router.get("/timeline/all", async(req,res)=>{
    
    try{
        const currentuser=await User.findById(req.body.userId);
        const userPost=await Post.find({userId:currentuser.id})
        const freindPost=await Promise.all()
        currentuser.subscribed.map(freindId=>{

            Post.find({userId:freindId})
        })
        res.json(userPost.concat(...freindPost))

    }catch(error){
        return res.status(500).json(error);
    }

})

module.exports=router;



