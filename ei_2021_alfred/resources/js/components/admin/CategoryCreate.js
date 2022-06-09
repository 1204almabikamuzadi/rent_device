import React, { useState, useEffect, useLayoutEffect } from 'react'
import Api from '../helpers/Api';
import { useForm, useFormState } from "react-hook-form"


function CategoryCreate() {
  const {handleSubmit,register,reset ,formState: { errors }} = useForm()
  const onSubmit = data => {
    console.log(data)
  Api().post('/category',data).then(res=>{
      console.log(res.data)
  }

  ).catch()
  reset()
}
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input className="form-control" type="text"  name="name" id="name" autoComplete="name"  {...register("name",{required:true})}/>
                        {errors.name?.type === 'required' && " name is required"}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary form-control">Create Category</button>
                    </div>
      </form>
      </div>
  )
}

export default CategoryCreate