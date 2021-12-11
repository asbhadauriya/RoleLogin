import React from 'react'
import Axios from "axios";
import Admin from "./People/Admin"

const Main = () => {

    const [rol,setRol]=useState("");

      useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=>{
        if(localStorage.getItem('user-info')){
  setRol((response.data.user[0].role))
  console.log("Role",rol);
        }
});
    
          
          
         
         //history.push("/user");
        //SSalert("logged in")
      
  },[])
    return (
        <div>
        {rol=='Admin' && ( return <Admin/>
        )}
        
        </div>
    )
}

export default Main
