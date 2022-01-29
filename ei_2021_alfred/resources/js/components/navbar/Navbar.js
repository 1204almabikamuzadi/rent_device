
import React,{useState,useContext,useLayoutEffect} from 'react';
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
import { useHistory } from 'react-router-dom';
import Api from '../helpers/Api';



function Navbar() {
  const {user,logout}=useContext(userContext);
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

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
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
          <Button color="inherit">Home</Button>
          {user&&user.role=="admin"&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={handleAdmin}>ADMIN</Button>
          </Typography>}
          {user && (
            <div>
              <IconButton>
              <Badge badgeContent={null} color="error">
                <AddShoppingCart  onClick={handleCart} />
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
               <Button color="inherit">Login</Button>
               <Button color="inherit">Signup</Button>
            </div>

          )

          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

