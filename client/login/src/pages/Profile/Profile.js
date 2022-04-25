import{useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { userSelector } from '../../services/auth.service';
import { useSelector } from "react-redux";
import "./Profile.css"

import {
    Avatar,

    Button,
 
  } from '@mui/material';
  import {userProfile, unFollow} from '../../services/UserService'



export default function Profile(){
    const location=useLocation();
    const { rol,cuserId } = useSelector(userSelector)
    const path=location.pathname.split("/")[2];


const[subscriber,setSubscriber]=useState(false);
const[subscribed,setSubscribed]=useState()



const[user, setUser]=useState([]);
 
    const handleSubscribe =async(e)=>{
        e.preventDefault();
        console.log("update",cuserId);
        
        
        
        try{
            console.log("path"+path)
                await axios.put(
                    'http://localhost:3001/follow/'+path,{
                         data:{userId:cuserId},
                        
                
            });
            
        } catch(err){
            console.log(err);
        }
    }
    const handleUnSubscribe =async(e)=>{
        e.preventDefault();
       
            const res= await unFollow(path,cuserId);
       
       
        
           }
    //const username =useParams().username;

    useEffect(() =>{
        const fetchUser = async () => {
            const res= await userProfile(path);
 
            setUser(await res);
            
            setSubscribed(res.subscribed.length);
            console.log("current"+user.data)
            
            if(res.subscribed.includes(cuserId))
            {
                setSubscriber(true);
                
               
                
            }
        };
        fetchUser();
       
        console.log("user"+user);

       


    },[path]);
    
  
    return(
         
        <div className="profile">
        <div className="profileRight">
        <div className="profileRightTop">
          <div className="" >
         
            <Avatar className="icon" src=" https://images.app.goo.gl/o6ves3ipa468BSAU8"/>
        


            </div>
            <h4 className="userName">{user.fname}</h4>
            {user.email}
        <div className="profileInfo">
        
        <p className="userSubscriber">Subscribers{} </p>
        <p className="userSubscribed">Subscribed {subscribed}</p>
        </div>

        </div>

      
        <div className="buttoon">

        { !subscriber ?
            <>
            
        {path!==cuserId ?
            <Button className="button" onClick={handleSubscribe} >Subscribe</Button>
            :
            " "
        }
            
            </>
           

               

           
       
        : 
        <>

        {path!==cuserId ?
            <Button className="button" onClick={handleUnSubscribe} >UnSubscribe</Button> 
        :
        " "
        
        }
        </>

       
    }
    </div>

        
        </div>
        </div>
        
    );
}