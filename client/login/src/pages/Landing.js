<<<<<<< HEAD
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography
  } from '@material-ui/core';

  export const Landing=()=>{
  const navigate = useNavigate();
  return(
      <div>

    
  <Typography
  color="textSecondary"
  variant="body1"
>
  <Link component={RouterLink} to="/login" variant="h6" underline="hover">
  Sign in
</Link>
</Typography>
 <Typography
 color="textSecondary"
 variant="body1"
>
<Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                  </Typography>
                  </div>

  )}
=======
import React,{ useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography
  } from '@material-ui/core';
  import { useSelector, useDispatch } from "react-redux"
import { userSelector, clearState } from '../services/auth.service';


  export const Landing=()=>{
  const navigate = useNavigate();
  const { username,email,rol,isSuccess } = useSelector(userSelector)
  useEffect(()=>{
    if (isSuccess) {
      console.log("ok",rol)
      
       if(rol=="User"){
         console.log("user")
     navigate('/user');}
      else if(rol=="Manager"){
         navigate("/Manager")}
         else if(rol=="Admin"){
                navigate("/Admin")}
    }
  }
  )
  return(
    <h2>This is landing</h2>
  )
}

>>>>>>> e862cab (Initial commit)
