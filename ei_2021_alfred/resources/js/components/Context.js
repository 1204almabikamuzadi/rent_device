import React from 'react';

const userContext = React.createContext({user:{},
    logUser:()=>{},getItem:()=>{},
logout:()=>{},isAuth:false});

export { userContext };