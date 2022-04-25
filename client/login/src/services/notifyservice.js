import axios from 'axios';

export const createNotify=({type,cuserId,socket})=>{
 try{
     const res= await axios.post("http://localhost/3001/notifi/create",{
        
         msg:type,
         userId:cuserId,
         
     })
     socket.emit('createNotify',{
         sender,
         reciever,
         msg
        }
     )
 }catch(err){
     console.log(err);
 }
}