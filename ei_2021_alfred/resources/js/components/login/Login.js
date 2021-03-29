import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Api from '../helpers/Api';
import Csfr from '../helpers/Csfr';
import Field from '../helpers/Field';
import User from '../helpers/User';
import { userContext } from '../Context';
import { withRouter } from 'react-router-dom';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            device_name:'browser',
            password:'',
            email:'',
            errors:[]

        }
        this.handleLogin=this.handleLogin.bind(this);
        this.handleChange=this.handleChange.bind(this);
        

    }

     handleChange(e){
         const name=e.target.name
         this.setState({
             [name]:e.target.value,
             
         })
     }
     handleLogin(e){
        e.preventDefault();
        const data=this.state;
        Api().post('/login',this.state).then( res=>{
                localStorage.setItem("token",res.data);
                localStorage.setItem("auth","true");
                this.props.history.push('/profile');
            }
        ).catch(error=>{
            if(error.response.status===422){
                console.log(error.response.errors)
                this.setState({errors:error.response.data.errors});
            }
        });
     
         
          
    }
    handleLogout(){
        User.logout().then(()=>{
            localStorage.removeItem("auth");
        });
    }
   
 render(){
            return(
                <ErrorBoundary>
                <div className="container">
                    <div className="home col-5 mx-auto py-2 mt-5">
                    <h1 className="text-center"> Login</h1>
                    {/* <div className="col align-self-start"></div> */}
                    <div className="card">
                    <div className="card-body">
                    <form  onSubmit={this.handleLogin} >
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input  className="form-control"type="email" id="email" name="email" onChange={this.handleChange} autoComplete="username" value={this.props.email}/>
                            {this.state.errors.email?<span className='text-danger'>{this.state.errors.email}</span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd" >Password</label>
                            <input className="form-control" name="password" onChange={this.handleChange} type="password" id="pwd" autoComplete="current-password" value={this.props.password} />
                            {this.state.errors.password?<span className='text-danger'>{this.state.errors.password}</span>:null}
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-primary btn-block form-control">Connexion</button>
                        </div>
                        

                    </form>
                    </div>
                    </div>
                    {/* <div className="col align-self-end"></div> */}
                    {JSON.stringify(this.state)}
                    </div>
                </div>
                </ErrorBoundary>
            );
        }
    
}
export default Login;
