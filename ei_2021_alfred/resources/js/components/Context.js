import React from 'react';

const userContext = React.createContext({user:{},
    logUser:()=>{},
logout:()=>{},isAuth:false});

export { userContext };