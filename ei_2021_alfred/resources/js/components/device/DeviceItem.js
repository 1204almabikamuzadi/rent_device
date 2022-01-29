import React,{useState,useEffect} from 'react'
import product_card from "../../../views/About"
import ErrorBoundary from '../ErrorBoundary'
import Api from '../helpers/Api';
import swal from 'sweetalert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams
  } from "react-router-dom";

function DeviceItem(props) {
    let {id}=useParams();

    const[device,setDevice]=useState();
    const [quantity, setquantity] = useState(0)
    const history=useHistory()
    const [loading, setloading] = useState(true)
    useEffect(item=>{
        const div=null
        Api().get("/device/"+id).then(res=>{
            console.log(res.data) 
            setDevice(res.data)
            setloading(false)
        }
        

        ).catch();

    },[]);
    const handleIncrement=()=>{
       
        setquantity(quantity+1)
    }
    const handleDecrement=()=>{
        if(quantity==0){
            setquantity(0)
        }
        else{setquantity(quantity-1)}
        
    }
    const handleBasket=(id)=>{
        const data={
            "device_id":device.id,
            "quantity":quantity
        }
        console.log(device.id)
        Api().post('/basket',data).then(res=>{
            if(res.data.status==201){
            swal("Cart!", "Cart have been created!", "success");
            
            }
            if(res.data.status==404){
                swal("Cart!", "device does not exists!", "error");
                }
           if(res.data.status==409){
                    swal("Cart!", "You are not logged in!", "warning");
                    }
             if(res.data.status==401){
                        swal("Cart!", "Device has been added already!", "error");
                        }
            if(res.data.status==200){
                            swal("Cart!", "Basket modified succesfully!", "success");
                            }
                            history.push("/profile")
        }
            
        ).catch(error=>{
            console.log(error)
        });
      

    }
    const handleDefault=(e)=>{
        
         e.target.src="http://127.0.0.1:8000/avatar/default.jpg"
        console.log("error")
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    else{
        return(
            <ErrorBoundary>
             <div className="card ">
        <img className="card-img-top" src={"http://127.0.0.1:8000/"+device.image_path } onError={handleDefault} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{device.description}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text">{device.price}<small className="text-muted">Last updated 3 mins ago</small></p>
         
          <div className="input-group" style={{width: "10%"}}>
              <button className="input-group-text" onClick={handleDecrement}>
                 -
              </button>
              <div className="form-control text-center">{quantity}</div>
              <button className="input-group-text" onClick={handleIncrement}>
                 +
              </button>
          </div>
          <button className="btn btn-primary" onClick={handleBasket}>Add to Basket</button>
        </div>
       </div> 
        </ErrorBoundary>
        );
        
    }
   

    
}

export default DeviceItem
