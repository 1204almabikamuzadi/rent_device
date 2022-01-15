import React, { useState, useEffect } from 'react'
import Api from '../helpers/Api';
import { useForm } from "react-hook-form"

function NewUser() {

  const {handleSubmit,register,reset ,formState: { errors }} = useForm()
  const onSubmit = data => {
    Api().post('/createUser',data).then(res=>{
        console.log(res.data)
    }

    ).catch()
    reset()
  }
   
  

    return (
        <div className="container">
            <div className="home col-md-7 mx-auto py-2 mt-5">
                <h1 className="text-center">Create New User</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input className="form-control" type="text"  name="name" id="name" autoComplete="name"  {...register("name",{required:true})}/>
                        {errors.name?.type === 'required' && " name is required"}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="form-control"   name="email" id="email" autoComplete="email" {...register("email",{required:true})} />
                        {errors.email?.type === 'required' && "email is required"}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd" >Password</label>
                        <input className="form-control" name="password" type="password" id="pwd" autoComplete="password" {...register("password")} />
                        {errors.password?.type === 'required' && "password is required"}
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpwd" >Confirm password</label>
                        <input className="form-control" type="password"   id="cpwd" name="password_confirmation" autoComplete="passwordconfirm" {...register("password_confirmation")}/>
                        {errors.password_confirm?.type === 'required' && "password_confirm required"}
                    </div>
                    <div className='form-group' >
                           <select className="form-control"  {...register("role")}>
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

export default NewUser
