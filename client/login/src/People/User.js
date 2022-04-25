import React, {  useEffect,useState } from "react"
import { useSelector } from "react-redux"
import { userSelector } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
 
  Box,
  Button,
  Card,
  
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import Allpost from "../crud/Allpost";









const User = () => {
  
  const { username, email,rol,cuserId,socket } = useSelector(userSelector)
 

  
  
  useEffect(()=>{
    
  },[])

    const navigate = useNavigate();
    
    
    
    
    const { isSuccess } = useSelector(userSelector)
    // useEffect(() => {
    //   dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }))
    // }, [])




    
useEffect(() => {
  if(isSuccess===false)
  navigate("/login");
},[isSuccess,navigate])
   
  

    

   
    
    
         return (
        <div>
      
            <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {username}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
         Your Email : {`${email}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
         Your Role : {rol}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
  

  
          <Allpost socket={socket}/>
        

         
         
      

          
           
          </div>
);
      
        

      
      
     
      
}


export default User
