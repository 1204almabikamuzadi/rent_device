import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ErrorBoundary from '../js/components/ErrorBoundary';
import LoginPage from '../js/components/login/loginPage';


function About()  {
    const history=useHistory();
    const handleClick=()=>{
        history.push("/contact");
    }
    
        return (
            
            <div className="container">
                <h1>about ya beto moshi</h1>
                
                <LoginPage/>
            </div>
            
    );
    
  
}

export default About;