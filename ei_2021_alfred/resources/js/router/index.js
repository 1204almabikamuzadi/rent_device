import React,{Component, useState} from 'react';
import { Switch, BrowserRouter, Route ,Link,useHistory,useLocation,Redirect} from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import UserProfile from '../components/profile/UserProfile'
import ProtectedRoute from './ProtectedRoute';
import Test from '../components/profile/Test';

import NavRoute from './NavRouter';


function Router(props) {
    const [isAuth,setIsAuth]=useState(true);
   
    return (
        <div>
            <BrowserRouter>
               
                <div className="py-4">
                    <Switch>
                        <NavRoute exact path="/" component={Home} />
                        <NavRoute path="/contact" component={About} />
                        <NavRoute path="/login" component={Login} />
                        <NavRoute path="/signup" component={Signup} />
                        <ProtectedRoute path='/profile' component={UserProfile} isAuth={isAuth}/>
                        <ProtectedRoute path='/test' component={Test}  isAuth={isAuth} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default Router;