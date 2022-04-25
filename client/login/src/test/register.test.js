import{render,screen} from "@testing-library/react";
import {Register} from "../pages/Authentication/Register";
import { BrowserRouter, Routes } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../app/store"


// test('username input should be empty',()=>{
//     render(<Login/>);
//     const userInputEl=screen.getByTestId('username');
//     expect(userInputEl).toBeInTheDocument();
//})
test('email input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Register/>
    
        </BrowserRouter>
       
   </Provider>);
   const InputEl=screen.getByTestId('Email');
   const buttonInputEl=screen.getByRole("button");
    expect(InputEl).toBeInTheDocument()
    expect(buttonInputEl).not.toBeDisabled()
})

test('password input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Register/>
    
        </BrowserRouter>
       
   </Provider>);
    const InputEl=screen.getByTestId('Password');
    expect(InputEl).toBeInTheDocument()
})
test('fname input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Register/>
    
        </BrowserRouter>
       
   </Provider>);
    const InputEl=screen.getByTestId('fname');
    expect(InputEl).toBeInTheDocument()
    
})

test('lname input should be in document',()=>{
    render(
        
   <Provider store={store}>

  
  
        <BrowserRouter>
        
        <Register/>
    
        </BrowserRouter>
       
   </Provider>);
    const InputEl=screen.getByTestId('lname');
    expect(InputEl).toBeInTheDocument()
    
})


test('button input should be renderd',()=>{
    render(
        
        <Provider store={store}>
     
       
       
             <BrowserRouter>
             
             <Register/>
         
             </BrowserRouter>
            
        </Provider>)
    const buttonInputEl=screen.getByRole("button");
    expect(buttonInputEl).toBeInTheDocument()
})

