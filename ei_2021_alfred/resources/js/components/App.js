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
            isAuth:false,
            itemInBasket:null
        }
        this.logout = this.logout.bind(this);
        this.logUser = this.logUser.bind(this);
        this.getItem= this.getItem.bind(this);
    }
    componentDidMount(){
        this.logUser();
        this.getItem();
    }
    logout() {
        this.setState({user: null,isAuth:false});
        console.log("logout ok")
      }
    async logUser(){ 
       await  Api().get("/loggeduser").then(res=>
                 {
            this.setState({user:res.data,isAuth:true})
            
                 }).catch(error=>{
                    
                 });
               
            }
            
      async getItem(){ 
                await  Api().get("/basket").then(res=>
                          {
                     this.setState({itemInBasket:res.data.basket.length})
                     
                          }).catch(error=>{
                             
                          });
                        
                     }
       
        
            
    
    render(){
        const value={
            user:this.state.user,
            isAuth:this.state.isAuth,
            itemInBasket:this.state.itemInBasket,
            logout:this.logout,
            logUser:this.logUser,
            getItem:this.getItem


        }
     
    return (
        <ErrorBoundary>
        <userContext.Provider value={value}>
        <div>   
            <Router/>  
        </div>
        </userContext.Provider>
        </ErrorBoundary>
    );
  }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
