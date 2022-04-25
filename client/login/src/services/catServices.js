
export const getCategory = async()=>{
    
    try{
        const response= await fetch('http://localhost:3001/category/All')
        
               
        //console.log(await response.json());
        return response
        }
        catch(error){
            console.log(error);
        }
    }
       