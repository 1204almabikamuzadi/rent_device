
import React,{useState,useContext} from 'react';
import { FaHome, FaSignInAlt, FaUserPlus,FaCartArrowDown } from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import User from './helpers/User';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';
import Api from './helpers/Api';
import '../components/navbar/nav.css';
import {userContext} from './Context';
import { useHistory } from 'react-router-dom';






function NavBar(props) {
  
  const {user,logout}=useContext(userContext);
  let history=useHistory();
  
  const handleLogout=()=>{
    Api().post('/logout').then(res=>{
      localStorage.removeItem("token");
      console.log(res.data)
      logout()
      history.push("/login")
    }
     
      ) 
  }
  const handleCart=(e)=>{
    e.preventDefault()
    history.push("/cart")
  }

  return (
      <div className="container-fluid">
    

  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
  
      </
      button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link to="/" className="link"><FaHome />HOME</Link>
        <Link to="/about" className="link">ABOUT</Link>
        <Link to="/contact" className="link">CONTACT</Link>
       
      </div>
      <div className="collapse navbar-collapse justify-content-end">
     {user? <div>
      <Button  variant="contained" color="primary" onClick={handleLogout}>
        LOGOUT
        </Button>
        <Button onClick={handleCart} ><FaCartArrowDown/></Button>
        
      
        
        </div>:<div><Button variant="contained" color="primary">
        < FaUserPlus/>
        <Link to="/signup" className="link">SIGNUP</Link>
        </Button>
        <Button variant="contained" color="primary">
         <FaSignInAlt/>
         <Link to="/login" className="link">LOGIN</Link>
        </Button>
        
       </div>}
         
      </div>
    </div>
  
  </nav>
  
  
  </div>
  );
}

export default NavBar;