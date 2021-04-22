import React,{Component, useState,useContext} from 'react';
import { Switch, BrowserRouter, Route ,Link,useHistory,useLocation,Redirect} from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';
import LoginPage from '../components/login/LoginPage';
import Signup from '../components/signup/Signup';
import UserProfile from '../components/profile/UserProfile'
import ProtectedRoute from './ProtectedRoute';
import Test from '../components/profile/Test';

import NavRoute from './NavRouter';
import {userContext} from '../components/Context'


function Router(props) {
    
   // const {user,logout,logUser,isAuth}=useContext(userContext);
    const [isAuth,setIsAuth]=useState(true);
   
    return (
        <div>
            <BrowserRouter>
               
                <div className="container-fluid" >
                    <Switch>
                        <NavRoute exact path="/" component={Home} />
                        <NavRoute path="/contact" component={About} />
                        <NavRoute path="/login" component={LoginPage} />
                        <NavRoute path="/signup" component={Signup} />
                        <ProtectedRoute path='/profile' component={UserProfile} isAuth={isAuth}/>
                       
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default Router;