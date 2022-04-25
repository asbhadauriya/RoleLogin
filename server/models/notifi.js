const mongoose = require('mongoose')

const notifiSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    user:{type: mongoose.Types.ObjectId, ref:'user'},
    reciever: mongoose.Types.ObjectId,
    text: String,
    isRead:{type:Boolean, default:false}
},{
    timestamps:true
})
module.exports=mongoose.model('notifi',notifiSchema)