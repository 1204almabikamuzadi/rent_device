import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router/index';
import {userContext} from './Context';
import Api from './helpers/Api';
import ErrorBoundary from './ErrorBoundary';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                name:"toto",
                titre:"moyibi",
                age:12
            }
            

            
        }
        this.logout = this.logout.bind(this);
        this.logUser = this.logUser.bind(this);
    }
    logout() {
        this.setState({user: {}});
        console.log("logout ok")
      }
    async logUser(){ 
       await  Api().get("/user").then(res=>
                 {console.log(res.data);
            this.setState({user:res.data})
                 });
                console.log("eko esimbi te")
            }
       
        
            
    
    render(){
        const value={
            user:this.state.user,
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
