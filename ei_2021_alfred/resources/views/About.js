import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ErrorBoundary from '../js/components/ErrorBoundary';



function About()  {
    const history=useHistory();
    const handleClick=()=>{
        history.push("/contact");
    }
    
        return (
            
            <div className="container">
                <h1>about ya beto moshi</h1>
                <h2>toto</h2>
                
                
            </div>
            
    );
    
  
}

export default About;