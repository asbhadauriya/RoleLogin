const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   fname:{
      type:String,
      required:true,

   },
   lname:{
      type:String,
      required:true,

   },
    email:{
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true,
     },
    subscriber:{
      type:Array,
      default:[]
      
  },
  subscribed:{
     type:Array,
     default:[]
  },
    role:{
       type: String,
       default: "User"
    }
      
},
{timestamps:true}
);

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel;

