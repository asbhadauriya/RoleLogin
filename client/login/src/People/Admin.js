
import { useNavigate } from 'react-router-dom';
import React, {useEffect,useState} from 'react';


const Admin = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("Admin"))
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
            Admin
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Admin;
