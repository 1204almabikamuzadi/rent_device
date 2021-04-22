import axios from 'axios';
import React,{Component} from 'react';
import Api from '../helpers/Api';
import User from '../helpers/User';



class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            errors:[]
        }
        this.handleRegister=this.handleRegister.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const name=e.target.name;
        this.setState({[name]:e.target.value});
        
    }
    handleRegister(e){        
        e.preventDefault();
        Api().post('/register',this.state).then(response=>
        {
            console.log(response)
        }).catch(error=>{
            if(error.response.status===422){
            
            this.setState({
                errors:error.response.data.errors
            });
        }

        });
        
    }

        render(){
            return(
                <div className="container">
                    <div className="home col-md-7 mx-auto py-2 mt-5">
                    <h1 className="text-center">Signup</h1>
                    <form onSubmit={this.handleRegister} >
                        <div className="form-group">
                            <label htmlFor="name" >Name</label>
                            <input  className="form-control"type="text" onChange={this.handleChange} name="name" id="name"  autoComplete="name"/>
                            {this.state.errors.name?<span className='text-danger'>{this.state.errors.name}</span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input  type="email" onChange={this.handleChange} className="form-control" name="email"  id="email"autoComplete="email"  />
                            {this.state.errors.email?<span className='text-danger'>{this.state.errors.email}</span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd" >Password</label>
                            <input className="form-control"name="password" onChange={this.handleChange} type="password" id="pwd" autoComplete="password" />
                            {this.state.errors.password?<span className='text-danger'>{this.state.errors.password}</span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpwd" >Confirm password</label>
                            <input className="form-control" onChange={this.handleChange} type="password" id="cpwd"  name="password_confirmation" autoComplete="passwordconfirm" />
                            {this.state.errors.password_confirmation?<span className='text-danger'>{this.state.errors.password_confirmation}</span>:null}
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-primary form-control">Register</button>
                        </div>

                    </form>
                   
                    </div>  
                </div>
            );
        }
    
}
export default Signup;
