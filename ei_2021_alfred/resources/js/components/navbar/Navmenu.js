import React,{useState,useContext} from 'react';
import { userContext } from '../Context';


function Navmenu(props) {
    const [currentUser,setCurrentUser]=useState({user:null})
    const {user,logout,logUser}=useContext(userContext);
    currentUser=user;

    return (
        <div>
      

    <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
    
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link to="/" className="link"><FaHome />HOME</Link>
          <Link to="/about" className="link">ABOUT</Link>
          <Link to="/contact" className="link">CONTACT</Link>
         
        </div>
        <div className="collapse navbar-collapse justify-content-end">
       {currentUser?<Button variant="contained" color="primary">
           <FaSignInAlt/>
           <Link to="/login" className="link">LOGIN</Link>
          </Button>:<div><Button variant="contained" color="primary">
          < FaUserPlus/>
          <Link to="/signup" className="link">SIGNUP</Link>
          </Button>
          
          <Button  onClick={this.handleLogout} variant="contained" color="primary">
          <Link to={this.handleLogout} className="link">LOGOUT</Link>
          </Button></div>}
           
        </div>
      </div>
    
    </nav>
    
    
    </div>
    );
}

export default Navmenu;