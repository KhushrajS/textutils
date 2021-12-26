
import React from 'react'

import    './Components.css'; 

import {

    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";




export default function MenuBar(values){

return ( 


    <div className="menubar">

    <h1 id="heading">
        {values.title}</h1>
    
    
        <ul>
    
    <li>
      <Link to="/">Home</Link>
    </li>
    
    <li>
    <Link to="/about">About</Link>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
    <li>
         <a href="#">More</a>
    
    </li>
    
    
        </ul>
    
    
    </div>
    
    
    
    
    
    












    
);




}




