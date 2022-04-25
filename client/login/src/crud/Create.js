import React, { useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {createPost} from '../services/crud';
import { userSelector } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';
import { getCategory } from "../services/catServices";

import {

  Container,
  Box,
  Button,

  TextField,
  Typography,
  Select,
  MenuItem
} from '@mui/material';



const Create= ({socket}) => {

    const navigate = useNavigate();
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const [category,setCategory]=useState("");

    // useEffect(() => {
    //     if(!localStorage.getItem("User"))
    //     {
    //         navigate("/Notfound");

    //     }
    const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }))
    // }, [])

    const {  cuserId,errorMessage } = useSelector(userSelector)
    const[cat,setCat]=useState([])



    async function getC(){
      const response= await getCategory();
      //setCat( await response.json());


      setCat(await response.json());
      console.log(cat);
      }

    useEffect( ()=>{

   
      getC();

    },[])


  



    function submitHandler(e){

      e.preventDefault();
       console.log("submit clicked");


       dispatch(createPost({ title, desc,cuserId,cat }))
         .unwrap()
         .then(() => {
           console.log("submit done");

         })

    socket.emit("sendNotification",{

      sender:cuserId,


      type:4,


    })
    navigate("/");


     };




   // }, [])





         return (
        <div>


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


        <Typography
          color="textPrimary"
          variant="h2"
        >
          Create Post
          </Typography>



        <TextField
        //error={Boolean(touched.email && errors.email)}
        fullWidth
       // helperText={touched.email && errors.email}
        label="TITLE"
        margin="normal"
        name="title"

        onChange={(e) => { setTitle(e.target.value)}}
        type="text"
        value={title}
        variant="outlined"
      /><br/>

     <TextField
        //error={Boolean(touched.password && errors.password)}
        fullWidth
       // helperText={touched.password && errors.password}
        label="Description"
        margin="normal"
        name="Description"
        //onBlur={handleBlur}
        onChange={(e) => { setDesc(e.target.value)}}
        type="text"
        value={desc}
        variant="outlined"
      /><br/>
      <Select
      width="30%"
      label="Category"
        
        name="Category"
        //onBlur={handleBlur}
        onChange={(e) => { setCategory(e.target.value)}}

        value={category}
        >

        <MenuItem value="1nm">Choose Category</MenuItem>
        {

           cat.categories?.map((c)=>(
            
            <MenuItem value={c.name} key={c._id}>
              {c.name}
           </MenuItem>

         ))
       


        }

      </Select>
       <Box sx={{ py: 2 }}>
        <Button
          color="primary"
          //disabled={isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Create
        </Button>

        </Box>

        </form>
        </Container>
        </Box>

      {errorMessage?<p>{errorMessage}</p>:null}



          </div>
);







}


export default Create
