import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router/index';
import {userContext} from './Context';
import Api from './helpers/Api';
import ErrorBoundary from './ErrorBoundary';
import '../../css/app.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:null,
            isAuth:false
        }
        this.logout = this.logout.bind(this);
        this.logUser = this.logUser.bind(this);
    }
    logout() {
        this.setState({user: null,isAuth:false});
        console.log("logout ok")
      }
    async logUser(){ 
       await  Api().get("/user").then(res=>
                 {console.log(res.data);
            this.setState({user:res.data,isAuth:true})
                 });
                console.log("eko esimbi te")
            }
       
        
            
    
    render(){
        const value={
            user:this.state.user,
            isAuth:this.state.isAuth,
            logout:this.logout,
            logUser:this.logUser
        }
     
    return (
        <userContext.Provider value={value}>
        <div>   
            <Router/>  
        </div>
        </userContext.Provider>
    );
  }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
