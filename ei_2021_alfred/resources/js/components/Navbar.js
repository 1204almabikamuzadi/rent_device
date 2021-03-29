import React from 'react';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
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
import {userContext} from './Context';






class Navbar extends React.Component{
  constructor(props){

    super(props);
    this.handleLogout=this.handleLogout.bind(this);
    this.state={
      user:""
    }
    
  }
  
  componentDidMount(){
    let res=this.context
    console.log(res);
  }
  
  handleLogout(){
    
    Api().post('/logout').then(res=>{
      localStorage.removeItem("token");

    });
   
    
  }
  render(){
    return(
    <div>
      

    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
    
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><FaHome />Home</a>
              <Link to='/'>home2</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Users</a>  
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact"  aria-disabled="false">Contacts</a>
              <Link to='/contact'>contact2</Link>
            </li>
          </ul>
         
         
    
        </div>
        <div className="collapse navbar-collapse justify-content-end">
        <a href="/login">
          <Button variant="contained" color="primary">
           <FaSignInAlt/>
            login
          </Button></a>
          <a href="/signup">
        <Button variant="contained" color="primary">
          < FaUserPlus/>
            Signup
          </Button></a>
          <a href="#">
          <Button  onClick={this.handleLogout} variant="contained" color="primary">
            Logout
          </Button></a>
    
        </div>
      </div>
    
    </nav> */}
    <div >
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" >
                News
              </Typography>
              <Button color="inherit">Login</Button>
              <Link  to="/">Home</Link>
              <Link     to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to={this.handleLogout}>Logout</Link>
            </Toolbar>
          </AppBar>
        </div>
    
    </div>
    );
    
  }
    

}
export default Navbar;
