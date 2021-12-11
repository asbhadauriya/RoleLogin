import { useNavigate } from 'react-router-dom';
import React, {useEffect,useState} from 'react';

 const Manager = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("User"))
        {
            navigate("/Notfound");
    
        }
    },[])
    function logout()
    {
        localStorage.clear();
        navigate("/login")
    
    }
    return (
        <div>
            manager
            <button onClick={logout}>Logout</button>
            
        </div>
    )
}
export default Manager
