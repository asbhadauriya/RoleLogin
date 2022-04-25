import React, {  useEffect,useState } from "react"
import {All} from '../services/crud'
//import Loader from "react-loader-spinner"


import { Link as RouterLink } from 'react-router-dom';
//import Post from './post'

import {
  Container,
  
} from '@mui/material';


import Post from "./Post";

export default function AllPost() {



    const [post,setPost] = useState([]);
    
const getPosts =async()=>{
 
  const response= await All();
 
  setPost(await response.json());
  
}


    
  useEffect(()=>{
      
  //  e.preventDefault();
  getPosts();

  }, []);



   
    
    
    
    
    return (
        <div>
        

        <h2>Your Post goes  here</h2>

        <Container maxWidth="sm">
        

        
       

          {
          post.map((p)=>(
            <Post  key={p._id} createdAt={p.createdAt} desc={p.desc} title={p.title} id={p._id} userId={p.userId}   />

    ))}
    </Container>
         


    
  </div>            
        
    )
}
