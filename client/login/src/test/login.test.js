import{render,screen, fireEvent} from "@testing-library/react";
import { BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../app/store"
import { Login } from "../pages/Authentication/Login";

const Button =({onClick,children})=>(
    <button onClick={onClick}>{children}</button>
)

// test('username input should be empty',()=>{
//     render(<Login/>);
//     const userInputEl=screen.getByTestId('username');
//     expect(userInputEl).toBeInTheDocument();
//})
test('email input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Login/>
    
        </BrowserRouter>
       
   </Provider>);
   const InputEl=screen.getByTestId('Email');
   
    expect(InputEl).toBeInTheDocument()
 
})

test('password input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Login/>
    
        </BrowserRouter>
       
   </Provider>);
    const InputEl=screen.getByTestId('Password');
    expect(InputEl).toBeInTheDocument()
})


// test('button input should be renderd',()=>{
//     render(
        
//         <Provider store={store}>
     
       
       
//              <BrowserRouter>
             
//              <Login/>
         
//              </BrowserRouter>
            
//         </Provider>)
//     const buttonInputEl=screen.getByRole("button");
//     expect(buttonInputEl).toBeInTheDocument()
// })

