import React, { useState, useEffect, useLayoutEffect } from 'react'
import Api from '../helpers/Api';
import { useForm, useFormState } from "react-hook-form"

function ModeleCreate() {


  const [options, setoptions] = useState([])
  const {handleSubmit,register,reset ,formState: { errors }} = useForm()
  const onSubmit = data => {
      console.log("j'y suis")
      console.log(data)
    Api().post('/modele',data).then(res=>{
        console.log(res.data)
    }

    ).catch()
    reset()
  }
  useEffect(() => {
    Api().get("/category").then(res=>{
        setoptions(res.data)
        console.log(res.data)
    }).catch()
}, [])
   
  

    return (
        <div className="container">
            <div className="home col-md-7 mx-auto py-2 mt-5">
                <h1 className="text-center">Create New Model</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input className="form-control" type="text"  name="name" id="name" autoComplete="name"  {...register("name",{required:true})}/>
                        {errors.name?.type === 'required' && " name is required"}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="description"> Description</label>
                        <textarea  className="form-control" name="description" id="description" cols="30" rows="5"  autoComplete="model" {...register("description",{required:true})} ></textarea>
                           
                    </div> 
                    <div className="form-group" >
                        <label htmlFor="specifications"> Specifications</label>
                        <textarea  className="form-control" name="specifications" id="specifications" cols="30" rows="5"  autoComplete="model" {...register("specifications",{required:true})} ></textarea>
                           
                    </div> 

                  
                   
                    <div className='form-group' >
                    <label htmlFor="category"> Category</label>

                           <select className="form-control"  {...register("category")}>
                           {options.map((option,i)=>{
                                        return(<option  key={i}value={option.id}>{option.name}</option>)
                                        
                                    })}
                            </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary form-control">Create Model</button>
                    </div>
                    

                </form>

            </div>

        </div>
    )
}

export default ModeleCreate
