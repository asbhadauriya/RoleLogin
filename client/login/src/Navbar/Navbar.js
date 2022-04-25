import React, { Fragment, useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {userSelector,  clearState } from '../services/auth.service';
//import Loader from "react-loader-spinner"

import { Link as RouterLink, useNavigate } from 'react-router-dom';
//import Post from './post'

import {
  Avatar,
 
  Button,
 
  Link,

 
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAcountIcon from '@mui/icons-material/SupervisorAccount';
import CreateIcon from '@mui/icons-material/Create';
import ChatIcon from '@mui/icons-material/Chat';
import"./Navbar.css";
import Option from "./NavOption";
import Notifications from "@mui/icons-material/Notifications";
import { getnotifi } from "../services/notifi";

import {connectSocket} from '../SocketClient';
import Create from "../crud/Create";





export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { username, email,rol,cuserId } = useSelector(userSelector)
    const [socket,setSocket]=useState([]);

    const[notifications,setNotifications]=useState([]);
    const[open,setOpen]=useState(false);

    
  
  useEffect(() => {
   
    if(socket===null){
    setSocket(connectSocket());
    socket?.emit("joinUser",cuserId);
   
    
    } 
    
    
       

    
    
    
  
    
  }, [cuserId,socket])



    // useEffect(()=>{
    //   console.log("so",socket)

    //   //  socket.on("getNotification",(data)=>{
    //   //   setNotifications((prev)=>[...prev,data]);
    //   // });
    //   console.log("not",notifications)

    // },[socket])

   const handelRead=()=>{
     setNotifications([]);
     setOpen(false);
   }

    function logout()
    {
      dispatch(clearState());
        localStorage.clear();

        navigate("/login")

    }

    const displayNotifi =({username,type})=>{
      let action;
      if(type===1){
        action="liked your post"
      }
      else if(type===2){
        action="commented on your post"
      }
      else if(type===3){
        action="shared your post"
      }
      else if(type===4) {
        action="followed you"
      }
      else{
        action="created new post"
      }
      return(

        <span className="notification">{+username +action+' .'}</span>
      )
    }





  // useEffect(()=>{
  //   const fetchNotifi = async () => {
  //   const res= await getnotifi(cuserId);
  //   setNotifications(res);
  //   }
  //   fetchNotifi();
  // },[])




  return (
     <div className="navbar">
     <div className="nav_left">
     <img src=" " alt=" Linkden"/>
     </div>
     <div className="nav_search">
     <SearchIcon/>
     <input type="text"/>
     </div>
     <div className="nav_right">
       <Option title="Home" Icon={HomeIcon} onClick={()=>navigate("/")}/>
       <Option title="Team" Icon={SupervisorAcountIcon} />
       <Option title="Notification" Icon={NotificationsIcon} counter={notifications.length} onClick={()=>setOpen(!open)}/>
       {rol === "Admin" |  rol === "User" && (
        <Link component={RouterLink} to="/create"  underline="none">

       <Option title="Create" Icon={CreateIcon}/>
       </Link>)}
       <Option title="Messaging" Icon={ChatIcon} counter={0}/>
       <Option data-testid="Logout" avatar="https://lh3.googleusercontent.com/ogw/ADea4I5bbvAicyeFDCzyX1OG5d5uzZ9uQtFZ-ypreLuDcQ=s32-c-mo" title={username}  onClick={logout}/>
      </div>


    <Fragment>
    {rol ==="Admin"&& (
        <Button>Add Employee</Button>
    )

    }
    {open && (
      <div className="notification">
      {notifications.map((n)=>displayNotifi(n))}
      <button className="nButton" onClick={handelRead}>
      Mark as Read
      </button>


      </div>
    )}

          </Fragment>

  </div>
  );
}
