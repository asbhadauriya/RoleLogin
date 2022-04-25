const express = require("express");
const app = express();
const cors = require('cors');
//const socket=require('socket.io');
const {Server} =require('socket.io');
const mongoose = require('mongoose');
const UserModel = require('./models/user')
const bodyParser = require('body-parser')
const logger=require('./logger/winstonLogger')

const Post=require('./models/post');
const userRoute=require('./routes/user')
const postRoute=require('./routes/post')
const notifiRoute=require('./routes/notif')
const categoryRoute=require('./routes/category')

const authRoute=require('./routes/auth');
const SocketServer = require("./socketserver");
require('dotenv').config()

const PORT= process.env.PORT || 3001;
 
app.use(express.json())


app.use(express.urlencoded({ extended: true }))
app.use(cors())  
app.use('/',authRoute)
app.use('/user',userRoute)
app.use('/posts',postRoute)
app.use('/notifi',notifiRoute)
app.use('/category',categoryRoute)
//app.use('/auth',authRoute)
const server=require('http').createServer(app)

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET", "POST"],
    }
})




//app.use(bodyParser.json())

// app.get ('/',(req,res)=>{
//    res.send("Hello")
// })

mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
   
    useUnifiedTopology:true,
}).then(()=>logger.log('info','mongo is connected')).catch((err)=>console.log(err));

server.listen(PORT, () => 
    logger.log('info','Server Runnin on',PORT));


io.on('connection', (socket)=>{

    

    logger.log('info','user is connected with :,'+socket.id)
   
    SocketServer(socket)
})



