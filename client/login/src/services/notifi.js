import axios from "axios";


export const getnotifi=   async(cuserId)=>{
try{
    
const response= await axios.get('http://localhost:3001/notifi/get',{
  data:{userId:cuserId},
})    
return response.data;

}
catch(error){
    console.log(error);
}
}