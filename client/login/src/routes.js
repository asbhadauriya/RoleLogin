import React, {useEffect} from 'react';
import './App.css';
import { Login } from './Login';
import {useHistory} from 'react-router-dom';
import { Register } from './Register';
import MainLayout from './MainLayout';
import {
  Route,
 Routes
} from "react-router-dom";
const routes = [
    {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
}
]
export default routes;