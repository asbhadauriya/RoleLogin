import React, { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import { userSelector } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useLocation } from "react-router-dom";


import { Link as RouterLink, useNavigate } from 'react-router-dom';
import "./single.css";
//import Post from './post'
//import{MoreVert} from '@material-ui/icons';

import {
  Avatar,

  Button,
  
  Link,
  
 
} from '@mui/material';
import { deletePoost, singlePost } from "../services/crud";
import { userProfile } from "../services/UserService";

export default function Single() {
    const[post,setPost]=useState([]);
    const[puser,setPuser]=useState([]);
    const location=useLocation();
    const navigate = useNavigate();
    const path=location.pathname.split("/")[2];

    //const dispatch = useDispatch();
    
    const {rol,cuserId } = useSelector(userSelector)


    useEffect(()=>{
        
        const getPost =async()=>{
            const response= await singlePost(path);
            setPost(response.data);
            console.log(post);
            
          }
          const fetchuser= async()=>{
         
            const res=await userProfile(post.userId);
            setPuser(res.data);
            console.log(res.data._id);
           
           
            
        
            
        }
          
         
          getPost();

       
        fetchuser();
    },[path,post] )

    

    const deletePost =async(e)=>{
        e.preventDefault();
        
        
                await deletePoost(post._id,cuserId)
                
                
           navigate('/'+rol);
        }

    


    
        function handelUpdate(e){

            e.preventDefault();
             console.log("submit clicked");

       
        console.log("update called")
    }
//     function handelSubscribe(e){

//         e.preventDefault();
//          console.log("submit clicked");

   
//     console.log("update called")
// }
  
//     function handelDelete(e){
//         console.log("hello");

     
    
        
// }

return(
    <div>
    <div className="post">
    <div className="postWrapper">
    <div className="postTop">
    </div>
    <div className="postTopLeft">
    <Link component={RouterLink} to={`/profile/${post.userId}`}>
    <Avatar/>
  

    
     
    
    <span className="postUsername" >{puser.fname}</span>

    </Link>
    
    
    </div>
    <div className="postTopRight">
    
    </div>
    </div>
    <div className="postCenter">
    <h3 className="postTitle">{post.title}</h3>
    <span className="postText">{post.desc}</span>

    </div>
    <div className="postBottom">
    
    {(cuserId===puser._id )?(
        <div>
        <Button  > Update</Button>
    
    
    <Button onClick={deletePost} > DElete</Button>
    </div>
    )  : "  "

    
    
    }
    
    </div>
    </div>
   
    </div>

    )
}



