
import { useNavigate } from 'react-router-dom';
import React, {useEffect,useState} from 'react';


const User = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("User"))
        {
            navigate("/Notfound");
    
        }
     
        
        
    
    }, [])
    function logout()
    {
        localStorage.clear();
        navigate("/login")
    
    }

   
    
    return (
        <div>
            user
            <button onClick={logout}>Logout</button>
     
        </div>
    )
}
export default User
