import axios from "axios";


export const userProfile =   async(id)=>{
    
    try{
        console.log(id);
    const response= await axios.get('http://localhost:3001/user/profile/'+id)
    
           
    return response.data;

    }
    catch(error){
        console.log(error);
    }
    
    
  }

  export const unFollow =   async(id,cuserId)=>{
    
    try{
        console.log(id);
        console.log("update",cuserId);
    const response= await axios.put('http://localhost:3001/user/unfollow/'+id,{
        data:{userId:cuserId},
    }

)
    
           
    return response.data;

    }
    catch(error){
        console.log(error);
    }
    
    
  }