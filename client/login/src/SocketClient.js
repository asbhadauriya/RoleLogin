import React,{useEffect,useRef} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createPost,userSelector, fetchUserBytoken, clearState } from './services/auth.service';
import io from "socket.io-client";
import { createAsyncThunk } from '@reduxjs/toolkit';


export const connectSocket= createAsyncThunk(
    'users/connectSocket',
    ()=>{
    const socket=io("http://localhost:3001");
    return socket;

});
