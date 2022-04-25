import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({ fname, lname, email, password }, thunkAPI) => {
      try {
        const response = await fetch(
          'http://localhost:3001/register',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fname,
              lname,
              email,
              password,
            }),
          }
        );
        
        let des = await response.json();
        console.log('des', des);
  
        if (response.status === 200) {
          
          
          return { ...des, fname: fname, email: email };
        } else {
          return thunkAPI.rejectWithValue(des);
        }
      } catch (e) {
        console.log('Error');
        return thunkAPI.rejectWithValue(e.response.des);
      }
    }
  
   );
  

   
export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
      console.log("messwge from login user");
      try {
        const response = await fetch(
          'http://localhost:3001/login',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }), 
          }
        )
        let data = await response.json()
        console.log("response", data)
        localStorage.setItem("user-info",JSON.stringify(data))
       // localStorage.setItem("role",response.user.role)
  
  
    
        if (response.status === 200) {
          localStorage.setItem("token", data.token)
          return data
        } else {
          return thunkAPI.rejectWithValue(response)
        }
       // const des = await response.json();
        console.log("data save to des");
          
       //localStorage.setItem("user-info",JSON.stringify(des))
        //localStorage.setItem("user-info",JSON.stringify(response))
         console.log("user info save to des");
       //  console.log(des);
        
        
        
        
        //console.log("response", des);
        // if (response.status === 200) {
        //   localStorage.setItem("token", des);
        
        //   return {...des};
        
        // } else {
        //   console.log("eer");
        
        //   return thunkAPI.rejectWithValue(des);
        
        //}
      } catch (error) {
        
        
        console.log('Error', error.response.data);
        thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  