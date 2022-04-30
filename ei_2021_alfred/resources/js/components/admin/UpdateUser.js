import React, { useState, useEffect,useLayoutEffect } from 'react'
import Api from '../helpers/Api';
import { useForm } from "react-hook-form"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function UpdateUser() {

  let {id}=useParams();
  const [member, setmember] = useState(null)
  const {handleSubmit,register,reset,setValue ,formState: { errors }} = useForm()
  const onSubmit = data => {
    Api().put("/user/"+id,data).then(res=>{
        console.log(res.data)
    }).catch()
        
       
  
  }
  
  useLayoutEffect(() => {
      Api().get("/user/"+id).then(res=>{
        const fields = ['name', 'email', 'role'];
        console.log(res.data.user.email)
        fields.forEach(field=>setValue(field,res.data.user[field],{ shouldDirty: true }))
        setmember(res.data.user)
      }).catch()
      return () => {
          console.log('finish')
      }
  }, [])
   
  

    return (
        <div className="container">
            <div className="home col-md-7 mx-auto py-2 mt-5">
                <h1 className="text-center">UpDate User</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input className="form-control" type="text"  name="name" id="name" autoComplete="name"  {...register("name",{required:true})}/>
                        {errors.name?.type === 'required' && " name is required"}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="form-control"    name="email" id="email" autoComplete="email" {...register("email",{required:true})}/>
                        {errors.email?.type === 'required' && "email is required"}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd" >Password</label>
                        <input className="form-control" name="password" type="password" id="pwd" autoComplete="password" {...register("password")} />
                        {errors.password?.type === 'required' && "password is required"}
                    </div>
                    
                    <div className='form-group' >
                           <select className="form-control"   {...register("role")}>
                                <option value="member">member</option>
                                <option value="full-member">full-member</option>
                                <option value="admin">admin</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary form-control">Register</button>
                    </div>
                    

                </form>

            </div>
        </div>
    )
}

export default UpdateUser
