import React, {  useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { userSelector, clearState } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';


import {
  
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import AllPost from "../crud/Allpost";



const Admin = () => {

    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(!localStorage.getItem("User"))
    //     {
    //         navigate("/Notfound");
    
    //     }
    const dispatch = useDispatch()
    const { isFetching, isError } = useSelector(userSelector)
    // useEffect(() => {
    //   dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }))
    // }, [])

    const { username,email,rol } = useSelector(userSelector)

    
    useEffect(() => {
        if(rol!=="Admin")
        navigate('/'+rol);
        
    },[rol,navigate] )

  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      navigate('/login')
    }
    else if(!localStorage){
      navigate('/login')
    }
   
    

  }, [isError,dispatch,navigate])
     
        
        
    
   // }, [])
  

   
    
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
  <AllPost/>
  
          </div>
);
      
        

      
      
     
      
}
export default Admin


