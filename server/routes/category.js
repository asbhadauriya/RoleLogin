let express = require('express');
const Categories=require('../models/categories')
const Post=require('../models/post')
let router = express.Router();

router.get("/All",async(req,res)=>{
try{
    const categories= await Categories.find().sort("-createdAt")
    res.json({categories})

}catch(err){
    return res.status(500).json({msg:err.message})
}
})
router.post("/create",async(req,res)=>{
    try{
        const name=req.body.name.toLowerCase()
        const newCategory= new Categories({name})
        await newCategory.save()
        res.json({newCategory})
    }catch(err){
        let errMsg;
        if(err.code===11000){
            errMsg=" already exists."
        }else{
            
            errMsg="name"
        }
        return res.status(500).json({msg:errMsg})
    }
})


module.exports=router;