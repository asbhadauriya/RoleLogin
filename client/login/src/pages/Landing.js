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
