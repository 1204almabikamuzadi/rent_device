const { FaRegFileCode } = require("react-icons/fa");
import { React,useState,useContext} from 'react';
import { userContext } from './Context';

function Test(props) {
    const {user,logout,logUser}=useContext(userContext);
    const newUser={
        name:"Mbote ya likasu"
    }

    return (
        <div>
          <h1>{user.name?user.name:"epanza makita"}</h1> 
          <button onClick={logout} >deco</button> 
          <button onClick={logUser} >connect</button> 
        </div>
    );
}

export default Test;