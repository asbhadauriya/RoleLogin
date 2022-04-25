import React from 'react'
//import {App} from '../App'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import{render,screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../app/store"

import '@testing-library/jest-dom'
import Navbar from '../Navbar/Navbar';

test('full app rendering/navigating',async()=>{
    const history = createMemoryHistory()
    render(
        <Provider store={store}>

        <BrowserRouter history={history}>

        <Navbar/>
        
        </BrowserRouter>
        
   </Provider>,
    )
    
   //I 18 n 
   
   
   userEvent.click(screen.getByTestId(/Home/i))
   
   expect(history.location.pathname).toEqual('/')
   
   userEvent.click(screen.getByTestId(/Notification/i))
   
   expect(screen.getByText(/Mark as Read/i)).toBeInTheDocument();
})