import { createSlice } from '@reduxjs/toolkit';
import {loginUser, signupUser} from './authService'


import {createPost} from './crud';


 




export const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: '',
      cuserId:'',
      email: '',
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
      rol: '',
      lname:'',
      post:[],
    
    },
    reducers: {
      clearState: (state,initialState) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;

        state.username= '';
        state.cuserId='';
        state.email='';
        state.socket=null;

       
      
        state.rol='';

  
        return state;
      },
    },
    extraReducers: {
      
      
      [signupUser.fulfilled]: (state, {payload}) => {
        console.log('payload', payload);
         state.isFetching = false;
         state.isSuccess = true;
         state.email = payload.user.email;
         state.username = payload.user.fname;
         
      //
        //return { ...action.payload };
        
      },
      [signupUser.pending]: (state) => {
        state.isFetching = true;
      },
      [signupUser.rejected]: (state, { payload }) => {
        state.isFetching = false;
       // state.isError = true;
        state.errorMessage = payload.error;
      },
      [loginUser.fulfilled]: (state, { payload }) => {
        console.log('payload', payload);
        state.email = payload.user.email;
        state.username = payload.user.fname;
        state.isFetching = false;
        state.isSuccess = true;
        state.rol=payload.user.role;
        state.cuserId=payload.user._id;
        state.lname = payload.user.lname;

        //return state;
      },
      [loginUser.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
       //state.errorMessage = payload.error;
      },
      [loginUser.pending]: (state) => {
        state.isFetching = true;
      },
      
    
      
    },
});

export const { clearState,login,logout } = userSlice.actions;

export const userSelector = (state) => state.user;

