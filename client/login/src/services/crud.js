import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const createPost = createAsyncThunk(
    'users/post',
  
    async ({ title, desc,cuserId,socket  }, thunkAPI) => {
      console.log("messwge from createpost");
      try {
        const response = await fetch(
          'http://localhost:3001/posts/create',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              desc,
              userId:cuserId
              
            }), 
          }
        )
        if (response.status === 200) {
          // socket.emit("sendNotification",{
          //   sender:cuserId,
          //   type,
          // });
          
          console.log("done");
        } else {
          console.log("error");
          return thunkAPI.rejectWithValue(response)
        
    
        }
        }
        catch (error) {
          console.log("error");
        
        
          console.log('Error', error);
          thunkAPI.rejectWithValue(error);
        }
      }
      
    );
  
    export const All =   async()=>{
        try{
        const response= await fetch('http://localhost:3001/posts/Allposts')
        
               
        return response;
        }
        catch(error){
            console.log(error);
        }
        
        
      }
    export const singlePost = async (path) =>{
      try{
        const response= await fetch('http://localhost:3001/posts/post/'+path)
        return response;
      }
      catch(error){
        console.log(error);
    }
    }

    export const deletePoost = async (postId,cuserId) => {
   
      console.log("delete");
     
      
      
      try{
              await axios.delete(
                  'http://localhost:3001/delete/'+postId,{
                      data:{userId:cuserId},
              
          });
        }
          catch(err){
            console.log(err);
        }
      }








          