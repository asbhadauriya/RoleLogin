import React, {useEffect} from 'react';
import './App.css';
import {Login}  from './pages/Login';
import {useHistory} from 'react-router-dom';
import {Register}  from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import NotFound from './pages/NotFound';
import Admin from './People/Admin';
import User from './People/User';
import Manager from './People/Manager';
import {
  BrowserRouter as Router,
  Route,
 Routes
} from "react-router-dom";

function App() {



  return (
    <div>
    
    <Routes>
    

     <Route exact path="/" element={<Landing/>}/>

    <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>

     <Route exact path="/forget" element={<ForgetPassword/>}/>

    
     

     <Route exact path="/Admin" element={<Admin/>}/>
     <Route exact path="/Manager" element={<Manager/>}/>
     <Route exact path="/user" element={<User/>}/>
     <Route exact path="/Notfound" element={<NotFound/>}/>
  
     </Routes>
     </div>
    
  );
}

export default App;
