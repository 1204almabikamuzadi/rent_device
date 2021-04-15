import React, { useContext } from 'react';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import Api from '../helpers/Api';
import  {userContext} from '../Context';

function UserProfile(props) {
    const {user,logout,logUser,isAuth}=useContext(userContext);
    return (
        <div>
           <ErrorBoundary>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Welcome</h5>
                    <p className="card-text">{user?user.name:"you don't exist"}</p>
                    <h2>{isAuth}</h2>   
               </div>
            </div>
            </ErrorBoundary> 
        </div>
    );
}

export default withRouter(UserProfile);