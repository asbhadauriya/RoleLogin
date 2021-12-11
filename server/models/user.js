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
    role:{
       type: String,
       default: "User"
    }
     
});

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel;

