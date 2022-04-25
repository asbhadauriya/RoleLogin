let express = require('express');
let router = express.Router();
const nodemailer=require('nodemailer');

// const router =require('express').Router() ;
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












 
//updateuser
router.put('/:id', async (req,res)=>{
    if(req.body.userId===req.params.id || req.user.role==="Admin")
    {
        console.log("you have acess");
        if(req.body.password){
            try{
                const salt=await bcrypt.genSalt(10);
                req.body.password =await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err);
 
        }           

        }
        try{
            const user= await User.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            });
            
            res.status(200).json("Acount update Sucess");
        }catch(err){
            return res.status(500).json(err);
        }
        

    }
    
    else{
        return res.status(403).json("You can not Update this account")
    }

})

//deleteuser
router.delete('/ :id', async (req,res)=>{
    if(req.body.userId===req.params.id || req.body.role==="Admin")
    {
        console.log("you have acess");
      
        try{
            const user= await User.deleteOne({_id:req.params.id});
            
            res.status(200).json("Acount delete Sucess");
        }catch(err){
            return res.status(500).json(err);
        }
        

    }
    
    else{
        return res.status(400).json("You can not Delete this account")
    }

})








//getaUser
router.get("/profile/:id",async(req,res)=>{
   
     
          
            try{
                const user= await User.findById(req.params.id);
                
                const{password,updatedAt, ...other}=user._doc
                
                res.status(200).json(other);
            }catch(err){
                return res.status(500).json(err);
            }

});


//follow
router.put("/follow/:id",async (req,res)=>{
    
    if(req.body.id!==req.params.id&& req.body.id!==null && req.params.id!==null){
        try{
            const user=await User.findById(req.params.id); 
            const currentuser=await User.findById(req.body.userId);
            if(!user.subscriber.includes(req.body.userId)){
                await user.updateOne({$push: {subscriber:req.body.userId}})
                

                await currentuser.updateOne({$push: {subscribed:req.params.id}})
                res.status(200).json("you followed this user");
            }else{
                res.status(403).json("you already followed this user");
             
            }
        } catch (err){
            console.log(err)
            res.status(500).json(err);
        }
   

        }

    
    else{
        return res.status(403).json('You cant follow this user')
    }

})
//unfollow
router.put("/unfollow/:id",async (req,res)=>{
    if(req.body.id!==req.params.id){
        try{
             const user=await User.findById(req.params.id); 
             const currentuser=await User.findById(req.body.userId);
            if(user.subscriber.includes(req.body.userId )){
                await user.updateOne({$pull: {subscriber:req.body.userId}})
                await currentuser.updateOne({$pull: {subscribed:req.params.id}})
                res.status(200).json("you unfollowed this user");
            }else{
                console.log(this)
                res.status(403).json("you don't followed this user");
             
            }
        } catch (err){
            res.status(500).json(err);
        }
        }

    
    else{
        return res.status(403).json('You cant unfollow this user')
    }

})




// login



router.get("/", requireLogin, async(req,res)=>{
    console.log(req.user);
   
    try{
        const user=await User.findById(req.user._id).select(".password");
        res.json(user);
    }catch(err){ 
        console.log(err);
    }
})



//post



module.exports=router;
//module.export=router;*/
