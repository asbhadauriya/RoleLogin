import React, { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { userSelector, clearState } from '../services/auth.service';
//import Loader from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';



const Manager = () => {

    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(!localStorage.getItem("User"))
    //     {
    //         navigate("/Notfound");
    
    //     }
    const dispatch = useDispatch()
    const { isFetching, isError } = useSelector(userSelector)
    // useEffect(() => {
    //   dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }))
    // }, [])

    const { username, email,rol } = useSelector(userSelector)

  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      navigate('/login')
    }
    if(rol!="Manager")
        {
            dispatch(clearState())
            navigate('/login')
          }
    

  }, [isError])
     
        
        
    
   // }, [])
    function logout()
    {
        dispatch(clearState())
        localStorage.clear();
        navigate("/login")
    
    }

   
    
    return (
        <div>
            user<div className="container mx-auto">
      
        
        <Fragment>
          <div className="container mx-auto">
            Welcome back <h3>{username}</h3>
          </div>

            <button onClick={logout}>Logout</button>
            </Fragment>
      
     
        </div>
        </div>
    )
}
export default Manager