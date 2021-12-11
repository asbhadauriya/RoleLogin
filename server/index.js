const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user')
const bodyParser = require('body-parser')
const routes=require('./routes/user')
require('dotenv').config()

const PORT= process.env.PORT || 3001;
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/',routes)

//app.use(bodyParser.json())

// app.get ('/',(req,res)=>{
//    res.send("Hello")
// })

mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
   
    useUnifiedTopology:true,
}).then(()=>console.log("mongo is connected")).catch((err)=>console.log(err));
/*app.post('/api/register', async(req,res)=>{
    console.log(req.body)
    try{
       await UserModel.create({
        email: req.body.email,
        password: req.body.password
    })
    res.json({status: 'ok'})
    }catch(err) {
        console.log(err)
    res.json({status: 'error', error: 'Email exist' })}
})

/*app.post("/register", (req,res)=>{
   const username = req.body.username;
   const password = req.body.password;
   });
bcrypt.hash(password, saltRounds, (err, hash)=>{
    if(err){
        console.log(err);
    } 
});
app.get("/login", (req,res)=>
{
    if(req.session.user){
        res.send({ loggedIn: true, user: req.session.user });
    }
    else
    res.send({loggedIn: false});
});
  app.post("/api/login", async(req,res)=>
{
    console.log(req.body)
  
         await UserModel.findOne({
            email : req.body.email,
            password: req.body.password
        })
        if(err){
             return res.json({ status:'error', user:false})
          
    }else{
        return res.json({ status: 'ok', user:true })
    
}
})
*/


app.listen(PORT, () => 
    console.log("Server Runnin on "+PORT));