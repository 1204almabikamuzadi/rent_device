import React,{useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import Api  from '../helpers/Api';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';


function DeviceCreate(props) {
    const fd=new FormData()
    const [details,setDetails]=useState({
        description:"",price:"",name:""
    });
    const [selectedFile,setSelectedFile]=useState(null);
    let history=useHistory();
    const handleChange=(e)=>{
        const name=e.target.name
        setDetails({...details,[name]:e.target.value})

    }
    const [options,setOptions]=useState([])
    const [image,setImage]=useState(null);
    const handleImage=(e)=>{
        setSelectedFile(e.target.files[0])
       
    }
    const [modele,setModele]=useState()
    const handleSelect=(e)=>{
        setModele(e.target.value)
        //console.log(category)
    }
    useEffect(()=>{
        const mods=[]
        Api().get("modele").then(res=>{
            (res.data).map(cat=>{
             mods.push(cat)
            })
            setOptions(mods)
            
        }).catch(error=>{
            console.log("modeles not found")
        })
    },[]);

    
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        fd.append("myfile",selectedFile,selectedFile.name)
        fd.append("category",category)
        fd.append("name",details.name)
        fd.append("description",details.description)
        fd.append("price",details.price)
        Api().post("/device",fd).then(res=>{
            console.log(res.data)
            
        }).catch(error=>{
           console.log("error") 
        });

    }   
    
    
   
  
    


    return (
        <div className="container">
            <div className="col-md-7 mx-auto py-2 mt-5 "> 
            <ErrorBoundary>
                 <h1>Create Device</h1>
                
                <form>
                <div className="form-group">
                    <label htmlFor="name"> Color</label>
                    <input  className="form-control"type="text" id="name" name="name" onChange={handleChange} autoComplete="name" value={props.props}/>
                        
                    </div>
                    <div className="form-group" onSubmit={handleSubmit}>
                        <label htmlFor="descriptin"> Description</label>
                        <textarea  className="form-control" name="description" id="description" cols="30" rows="5" onChange={handleChange} autoComplete="model" value={props.model} ></textarea>
                           
                    </div> 
                    <div className="form-group" onSubmit={handleSubmit}>
                        <label htmlFor="descriptin"> Specifications</label>
                        <textarea  className="form-control" name="description" id="description" cols="30" rows="5" onChange={handleChange} autoComplete="model" value={props.model} ></textarea>
                           
                    </div> 

                    <div className="form-group">
                    <label htmlFor="modele "> Modele</label>
                    <select id='modele' className="select form-control" value={modele} onChange={handleSelect}>
                                    {options.map((option,i)=>{
                                        return(<option  key={i}value={option.id}>{option.name}</option>)
                                        
                                    })}
                      </select>
                    
                    </div>
                    <div className="form-group">
                    <label htmlFor="price"> Price</label>
                    <input  className="form-control"type="text" id="price" name="price" onChange={handleChange} autoComplete="price" value={props.props}/>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="image"> Image</label>
                        <input  className="form-control"type="file" id="image" name="image" onChange={handleImage} autoComplete="model" value={props.image}/>
                        
                    </div>
                    <div className="form-group">
                           <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block form-control">New Device</button>   
                    </div>

                </form>
                {/* <img src="http://127.0.0.1:8000/avatar/7SzhycwUrO4xRRPQvefZbbiOkjVjU6w729m3MD8z.jpg" alt="image cahée" /> */}
            </ErrorBoundary>
            </div>
            { JSON.stringify(details)}
            
        </div>
    )
}
export default withRouter(DeviceCreate)
