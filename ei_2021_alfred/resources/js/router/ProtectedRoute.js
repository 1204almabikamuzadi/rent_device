import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar';

function ProtectedRoute ({isAuth:isAuth,component:Component,...rest}) {
    
        return (
            <Route
            {...rest}
            render={(props)=>{
                if(isAuth){
                    return (
                        <div>
                             <Navbar/>
                             <Component/>
                        </div>
                    
                        );
                }
                else{
                    return (
                    <Redirect to={{pathname:"/",state:{from: props.location}}}/>
                );
                }
            }

            }
            />
        );

}

export default ProtectedRoute;