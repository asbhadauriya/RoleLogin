import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik'; 
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
import {signupUser} from '../../services/authService'
import { userSelector, clearState } from '../../services/auth.service'



export const Register = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const[fname, setFname]=useState("");
  const[lname, setLname]=useState("");
//  const[login,setLogin]=useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { isSuccess, isError, errorMessage } = useSelector(
      userSelector
    );
    
    
   function submitHandler(e){

     e.preventDefault();
      console.log("hj");


      dispatch(signupUser({ fname,lname, email, password }))
        .unwrap()
        .then(() => {
          console.log("hhh");
        
        })
        
    
    };

    useEffect(() => {
      return () => {
        dispatch(clearState());
      };
    },);

      // const response= await fetch('http://localhost:3001/register', {
      //     method: 'POST',
      //     headers:{
      //         'Content-Type':'application/json',
      //     },
      //     body: JSON.stringify({
      //         email,
      //         password,
      //         fname,
      //         lname, 
      //     }),
        
     
      // })
      // response = await response.json()
    //   setLogin("True");
      
    //   console.log(response);
    // };
    useEffect(()=>{
      if (isSuccess) {
        dispatch(clearState());
       navigate('/login');
      }
  
      if (isError) {
        console.log(errorMessage);
       // toast.error(errorMessage);
        dispatch(clearState());
      }

    },[isSuccess,isError,dispatch,errorMessage]);

     

  

    return (
        <div>
            <form onSubmit={submitHandler}>
           
        
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
                 // helperText={touched.password && errors.password}
                 
                 
                 data-testid="Password"
                 label="Password"
                
                
                  margin="normal"
                  name="password"
                  //onBlu`r={handleBlur}
                  onChange={(e) => { setPassword(e.target.value)}}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                
               <br/>
                
                <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label="Full Name"
                  data-testid="fname"
                  margin="normal"
                  name="text"
                  //onBlur={handleBlur}
                  onChange={(e) => { setFname(e.target.value)}}
                  type="text"
                  value={fname}
                  variant="outlined"
                />
                
                <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label="Last name"
                  data-testid="lname"
                  margin="normal"
                  name="text"
                  //onBlur={handleBlur}
                  onChange={(e) => { setLname(e.target.value)}}
                  type="text"
                  value={lname}
                  variant="outlined"
                />
                 <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    //disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                {errorMessage?<p>{errorMessage}</p>:null}
               
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Do have an account?
                  {' '}
                  <Link component={RouterLink} to="/login" variant="h6" underline="hover">
                    Sign in
                  </Link>
                </Typography>
            </form> 
            
        </div>
    )
}
