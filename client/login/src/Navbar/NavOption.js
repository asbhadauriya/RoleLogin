import { Avatar } from '@mui/material';
import React from 'react'
import "./Navoption.css";

export default function Option({avatar,title, Icon,onClick,counter}) {
  return (
    <div onClick={onClick} className="nav_option">
    {Icon && <div className="navIcon"> <Icon />{counter>0  ?<div className='counter'>{counter}</div> : " "} </div>}
    {avatar && <Avatar className='navIcon' src={avatar}/>}
    <h3 className="navoption_title">{title}</h3>
    </div>
  )
}
