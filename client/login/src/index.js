import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./app/store"
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistStore } from 'redux-persist';



let persistor = persistStore(store);


ReactDOM.render(



   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
     
    <App />
    </Router>
   
    </PersistGate>
   </Provider>,
 
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
