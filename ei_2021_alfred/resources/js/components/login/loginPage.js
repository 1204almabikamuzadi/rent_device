import React ,{useState,useContext} from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Api  from '../helpers/Api';
import { userContext } from '../Context';
import { useHistory } from 'react-router-dom';

function LoginPage(props) {
    const  [details,setdetails]=useState({email:"",password:"",device_name:"browser",errors:[]});
    const {user,logout,logUser,isAuth}=useContext(userContext);
    let history=useHistory();
 const handleLogin=(e)=>{
       e.preventDefault();
       Api().post('/login',details).then( res=>{
        console.log(user);
        localStorage.setItem("token",res.data);
        logUser();
        console.log(isAuth);
        history.push('/profile');
    }
).catch(error=>{
    if(error.response.status===422){
        setdetails({errors:error.response.data.errors});
    }
});
    }
    const handleChange=(e)=>{
        const name=e.target.name
        setdetails({...details,[name]:e.target.value})

    }
   
    const styles={
        backgroundColor:"DodgerBlue"
    }
    return (
        <div>
          <ErrorBoundary>
                <div className="container">
                    
                    

                    <div className="home col-md-7 mx-auto py-2 mt-5">
                    <h1 className="text-center"> Login</h1>
                    {/* <div className="col align-self-start"></div> */}

                    <div className="card">
                    <div className="card-body">
                    <form  onSubmit={handleLogin} >
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input  className="form-control"type="email" id="email" name="email" onChange={handleChange} autoComplete="username" value={props.email}/>
                            {details.errors.email?<span className='text-danger'>{details.errors.email}</span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd" >Password</label>
                            <input className="form-control" name="password" onChange={handleChange} type="password" id="pwd" autoComplete="current-password" value={props.password} />
                            {details.errors.password?<span className='text-danger'>{details.errors.password}</span>:null}
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-primary btn-block form-control">Connexion</button>
                          
                        </div>
                        

                    </form>
                    

                    </div>
                    </div>
                    {/* <div className="col align-self-end"></div> */}
                    {JSON.stringify(user)}
                    </div>
                
                </div>
                </ErrorBoundary>  
        </div>
    );
}

export default LoginPage;