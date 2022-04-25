import React, { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { userSelector, fetchUserBytoken, clearState } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(!localStorage.getItem("User"))
    //     {
    //         navigate("/Notfound");
    
    //     }
    const dispatch = useDispatch()
    const { isSuccess, isError, errorMessage } = useSelector(
        userSelector
      );

    const {rol } = useSelector(userSelector)

    
    useEffect(()=>{
       
          dispatch(clearState());
           if(rol=="User"){
         navigate('/user');}
          else if(rol=="Manager"){
             navigate("/Manager")}
             else if(rol=="Admin"){
                    navigate("/Admin")}
        
    
    
        },[]);
    }
    export default Main;