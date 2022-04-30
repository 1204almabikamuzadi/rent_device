
import React,{useState,useContext,useLayoutEffect, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { AddShoppingCart } from "@material-ui/icons";
import { Badge} from "@material-ui/core";
import {userContext} from '../Context';
import { useHistory,Link } from 'react-router-dom';
import Api from '../helpers/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Navbar() {
  const {user,itemInBasket,getItem,logout}=useContext(userContext);
  let history=useHistory();
  const handleLogout=()=>{
    Api().post('/logout').then(res=>{
      localStorage.removeItem("token");
      logout()
      history.push("/login")
    }
     
      ) 
  }
  const handleCart=(e)=>{
   e.preventDefault()
    history.push("/cart")
  }
  const handleAdmin=(e)=>{
    e.preventDefault()
    history.push("/adminpannel")
  }
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [itemInBasket, setitemInBasket] = useState();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuin = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin=()=>{
    history.push("/login")
  }
  const handleRegister=()=>{
    history.push("/signup")
  }
  const handleHome=()=>{
    history.push("/")
  }
  const handleProfile=()=>{
    history.push("/profile")
  }
  useEffect(() => {
   getItem()
   
  }, [itemInBasket]);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
     
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon />
          
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}><Button color="inherit" onClick={handleHome}>Home</Button></Typography>
          <Typography sx={{ flexGrow: 1 }}><Button color="inherit" onClick={handleProfile}>All Products</Button></Typography>
          {user&&user.role=="admin"&&<Typography variant="h6" component="div" >
          <Button color="inherit" onClick={handleAdmin}>ADMIN</Button>
          </Typography>}
          {user && (
            <div>
              <IconButton>
              <Badge badgeContent={itemInBasket
              } color="error">
                <ShoppingCartIcon  onClick={handleCart} />
               </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
          {!user&&(
            <div>
               <Button color="inherit" onClick={handleLogin}>Login</Button>
               <Button color="inherit" onClick={handleRegister}>Signup</Button>
            </div>

          )

          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

