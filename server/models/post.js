const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
   

    userId:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,

    
    },
    likes:{
        type:Array,
        default:[]
    },
    category:{type: ObjectId, ref:'category'}   
   
     
},{timestamps:true}
);

const postModel = mongoose.model("post",PostSchema)
module.exports = postModel;

