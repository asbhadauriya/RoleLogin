import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, {useEffect,useState} from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import Axios from "axios";
//import {useNavigate} from "react-router-dom";

//import FacebookIcon from '../icons/Facebook';
//import GoogleIcon from '../icons/Google';

 export const Login = () => {
  const navigate = useNavigate();


   const [email, setEmail]=useState("");

  const [password, setPassword]=useState("");

  const [rol,setRol]=useState("");
  
  const [error,setError]=useState("");

  //const navigate = useNavigate();

  useEffect(() => {
    //Axios.get("http://localhost:3001/login").then((response)=>{
        if(localStorage.getItem('user-info')){

          navigate("/{rol}");
          
          
          
            
 //setRol((response.data.user[0].role))         
 
   }

},[])
    
          
          
         
         //history.push("/user");
        //SSalert("logged in")
      
  

   async function submitHandler(e) {
      e.preventDefault();
      let item={email,password};
      
        setError(null)
      const response= await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(item)
    }).then((res) => res.json())
    //const data= await res.json();
   // localStorage.setItem("user-info",response)
   localStorage.setItem("user-info",JSON.stringify(response))
   setRol(response.user.role);
    if(rol==="Admin"){
     localStorage.setItem("Admin",rol)
          navigate("/Admin")
        }
          else if(rol=="Manager"){
          navigate("/Manager")}
          else if(rol==="user"){
          navigate("/User")}
   // setRole(response.data.user[0].role);
   
 
   //alert("loggedIn")
}




  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
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
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            //onSubmit={() => {
             // navigate('/app/dashboard', { replace: true });
           // }}
          >
            {({
              
              handleSubmit,
             
              values
            }) => (
              <form onSubmit={submitHandler}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
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
                     fa
                      onClick={handleSubmit}
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
                      Google
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  //error={Boolean(touched.email && errors.email)}
                  fullWidth
                 // helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                 
                  onChange={(e) => { setEmail(e.target.value)}}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  //onBlur={handleBlur}
                  onChange={(e) => { setPassword(e.target.value)}}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                {error ?<p>{error}</p>:null}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    //disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                 <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  
                  {' '}
                  <Link component={RouterLink} to="/forget" variant="h6" underline="hover">
                   Forget Password?
                  </Link>
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    
    </>
  );
}


