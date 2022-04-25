const User = require('./models/user');

let user=[];

const addUser =(userId,socketId)=>{
    console.log("this runs")
    !user.some((u)=>u.userId=== userId) &&
    user.push({userId, socketId});
    console.log("soket",socketId)


}
const removeUser =(socketId)=>{
    user=user.filter((u)=>u.socketId!==socketId);
}
const getUser=(userId)=>{
    return user.find(u=>u.userId === userId);
}

const SocketServer = (socket) =>{

    socket.on('joinUser',(userId)=>{
        console.log("join")
    addUser(userId,socket.id);
   
});
socket.on("sendNotification",async({sender,type,reciever})=>{
    


    const currentuser=await User.findById(sender);
   if(type===4){
    const freinds = await Promise.all(
        currentuser.subscriber.map((fId)=>{
            return User.findById(fId);
        })
    );
    let flist = [];

    freinds.map((f)=>{
        const reciever=getUser(f._id)

        
      console.log("reci",reciever);
    socket.to(reciever.socketId).emit("getNotification",{
        sender:currentuser.fname,
        type,
    });

    });  
}
 else{
    const recieve=getUser(reciever);
    console.log("uu",recieve);
    socket.to(recieve.socketId).emit("getNotification",{
        sender:currentuser.fname,
        type,
    });
}
})



socket.on('disconnect',()=>{
    removeUser(socket.id);
    
    console.log("User disconnected"+socket.id)
})

// socket.on('likePost',newPost=>{
//     const ids=[...newPost.user.subscribers,newPost.user._id]
//     const clients =user.filter(user=>ids.includes(user.id))
//     if(clients.length>0)
//     {
//         clients.forEach(client =>{
//             socket.to('${client.socketId}').emit('likeToClient',newPost)
//         })
//     }
// })

// socket.on('createNotify',msg=>{
//     const client =user.find(user=> msg.reciever.includes(user.id))
//     client && socket.to('${client.socketId}').emit('createNotifyToClient',msg)
// })

}

module.exports=SocketServer
