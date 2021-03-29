import * as React from 'react';
import axios from 'axios';



let Api=function(){
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    let token=localStorage.getItem("token");
    if(token){
        axios.defaults.headers.common['Authorization']=`Bearer${token}`;
        console.log(token);
    }
    
    return axios;
}

export default Api;