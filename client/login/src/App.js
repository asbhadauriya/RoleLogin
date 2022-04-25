import React from 'react';
import './App.css';
import {Login}  from './pages/Authentication/Login';
//import {useHistory} from 'react-router-dom';
import {Register}  from './pages/Authentication/Register';
import ForgetPassword from './pages/Authentication/ForgetPassword';
import NotFound from './pages/NotFound';
import Admin from './People/Admin';
import User from './People/User';
import Manager from './People/Manager';
import {
 
  Navigate,
  Route,
 Routes
} from "react-router-dom";
import AllPost from './crud/Allpost';
import Create from './crud/Create';

import Profile from './pages/Profile/Profile';
import Single from './crud/Single';
import { useSelector} from "react-redux"
import { userSelector  } from './services/auth.service';
import Navbar from './Navbar/Navbar'




function App() {
  

  

  const { rol,isSuccess } = useSelector(userSelector)



  return (
    
    <div>
  {(isSuccess)?(<Navbar/>)
    :("")
    }
    <Routes>

<<<<<<< HEAD
     <Route exact path="/" element={<Landing/>}/>

    <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>

     <Route exact path="/forget" element={<ForgetPassword/>}/>

    
     

     <Route exact path="/Admin" element={<Admin/>}/>
     <Route exact path="/Manager" element={<Manager/>}/>
     <Route exact path="/user" element={<User/>}/>
     <Route exact path="/Notfound" element={<NotFound/>}/>
=======
    
    <Route exact path="/login" element={ <Login/> }/>
>>>>>>> e862cab (Initial commit)
  
   
    <Route exact path="/register" element={<Register/>}/>

    <Route exact path="/forget" element={<ForgetPassword/>}/>


    <Route exact path="/" 
    element={<Navigate to= {rol==="User" ? "/user" : rol==="admin" ? "/Admin" : "/Manager" }/>} />
     
 
    
   
    
 
 
  
      <Route exact path="/Admin" element={<Admin/>}/>
 
      
 
     
      <Route exact path="/Manager" element={<Manager/>}/>
   
      
 
      <Route exact path="/user" element={<User />}/>
     
        <Route path="Allpost" element={<AllPost/>}/>
        <Route exact path="/create" element={<Create />}/>
        <Route exact path="/post/:id" element={<Single/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
      
    
        <Route path="*" element={<Navigate to={isSuccess ? "/" : <Login/> }/>}/>
           
  

    





    </Routes>

    </div>
    
    
   

      
      
      
    
        
  );
}

export default App;
