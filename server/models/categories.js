const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    

    name:{
        type:String,
        required:true,
        unique: true,
        maxlength:50

    },
    follower:{
        type: Array,
        default:[]
    }
 
   
     
},{timestamps:true}
);

const categoryModel = mongoose.model("category",categorySchema)
module.exports = categoryModel;

