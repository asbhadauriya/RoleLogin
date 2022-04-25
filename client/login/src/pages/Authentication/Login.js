import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

import { Helmet } from 'react-helmet';

// Authentication layout components
//import BasicLayout from "layouts/authentication/components/BasicLayout";
import React, {useState, useEffect} from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {loginUser} from '../../services/authService';
import {  userSelector, clearState } from '../../services/auth.service';

export const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
 
//  const[login,setLogin]=useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { isSuccess, isError, errorMessage } = useSelector(
      userSelector
    );
    const { rol } = useSelector(userSelector)
    
   function submitHandler(e){

     e.preventDefault();
      console.log("submit clicked");


      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          console.log("submit done");
        
        })
        
    
    };
    


    useEffect(()=>{
      if(isSuccess)
      {
        navigate("/");
      }
     
      //akshyabhada204@gmail.com Nodemail@07
  
      if (isError) {
        console.log(errorMessage);
       // toast.error(errorMessage);
        dispatch(clearState());
      }

    },[isSuccess,isError,dispatch,errorMessage,navigate]);

    
  

    return (
        <div>
        <Helmet>
        <title >Login </title>
      </Helmet>

      <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm">
   
     
            <form onSubmit={submitHandler}>

            <Box sx={{ mb: 3 }}>
            <div data-testid='username'>
            <Typography
              color="textPrimary"
              variant="h2"
              
            >
              Sign in
              </Typography>
              </div>

            <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            Sign in on the internal platform
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Button
              color="primary"
              fullWidth
              //onClick={handleSubmit}
              size="large"
              variant="contained"
            >
              Login with Facebook
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Button
              fullWidth
              size="large"
              variant="contained"
              
            >
              Login with Google
            </Button>
          </Grid>
        </Grid>





            <TextField
                  //error={Boolean(touched.email && errors.email)}
                  fullWidth
                  data-testid="Email"
                 
                  
                   
                 // helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                 
                  onChange={(e) => { setEmail(e.target.value)}}
                  type="email"
                  value={email}
                  variant="outlined"
                  
                /><br/>
               
               <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                  data-testid="Password"
                 // helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  //onBlur={handleBlur}
                  onChange={(e) => { setPassword(e.target.value)}}
                  type="password"
                  value={password}
                  variant="outlined"
                /><br/>
                 <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    //disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!email||!password}
                  >
                    Sign in
                  </Button>
                </Box>
                {errorMessage?<p>{errorMessage}</p>:null}
               
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don't have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography>
            </form> 
            </Container>
            </Box>

            </div>
            

            
        
    )
}
 