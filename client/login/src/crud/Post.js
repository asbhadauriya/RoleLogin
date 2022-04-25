import React, { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import {userSelector } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import {userProfile} from '../services/UserService'

import { Link as RouterLink, useNavigate } from 'react-router-dom';
//import Post from './post'

import {
  Avatar,
  Button,
  Link,
  
  CardActions,
} from '@mui/material';
import "./post.css";


export default function Post(post) {
    //const dispatch = useDispatch();
    const { cuserId } = useSelector(userSelector)
    const[user,setUser]=useState([])

    useEffect(() =>{
      const fetchUser = async () => {
          const res = await userProfile(post.userId);
          setUser(res);
          console.log(post.socket);
          
      };
      fetchUser();
     
     
     // console.log("user"+user);

     


  },[post.userId, post.socket]);
  
  function handelShare(e){
    e.preventDefault();


    post.socket.emit("sendNotification",{
    
      sender:cuserId,
      reciever:post.userId,
    
      type:1,
      

    })
    

  }

    
     
    return(<div className="time">
        <div className="post">
        <div className="post_header">
        <Avatar/>
      
        <div className="post_info">
        <Link className="link"   component={RouterLink} to={`/post/${post.id}`}   underline="none"  >
        <h2>{post.title}</h2>
        
        </Link>
  
        <p>Author: {user.fname}</p>
      
        </div>
        </div>

        <div className="post_body">
        
        <Link className="link"   component={RouterLink} to={`/post/${post.id}`}   underline="none"  >
        {post.desc}
        </Link>
        
        </div>
        <CardActions>
         <Button size="small" color="primary" onClick={handelShare}>
         share
         </Button>
         <Button size="small" color="primary">
         info
         </Button>
         </CardActions>


        </div>
        
        <span>{new Date(post.createdAt).toDateString()}</span>

        </div>

    //      <Card marginBottom="5">
    //      <CardActionArea>
    //      <Box
    //   sx={{
    //     backgroundColor: 'grey',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     height: '10%',
    //     justifyContent: 'center'
    //   }}
    // >
      //              <Typography>
    //      {post.title}
         
    //      </Typography>
    //      <Typography>
    //      {post.desc}
         
    //      </Typography>
    //      </Link>
    //      </Box>
         
         
         
    //      </CardActionArea>
         
         
    //      </CardActions>


         
         
       
            

          
            
            
        
       

        
        
       //</div> </Card>
        //</div>
 )
}