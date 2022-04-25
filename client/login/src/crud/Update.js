import React, { useContext, useState } from 'react';
import axios from 'axios';
import { updatePost,userSelector, fetchUserBytoken, clearState } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';


const UpdatePost = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isFetching, isError } = useSelector(userSelector)

return(
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id='title'
          label='title'
          margin="normal"
          value={stateLocal.title}
          onChange={handleTitleChange}
        />
        <br />
        <TextField
          id='body'
          label='body'
          multiline
          rows="4"
          margin='normal'
          value={stateLocal.body}
          onChange={handleBodyChange}
          />
      <br />
      <button type="submit"> Submit </button>
      </form>
      <br />
      <Button onClick={() => history.goBack()}> Cancel </Button>
    </div>
)}



export default UpdatePost;