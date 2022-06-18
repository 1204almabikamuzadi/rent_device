
import React,{useState,useEffect,useContext} from 'react'
import {userContext} from '../Context';
import Pict from '../helpers/Pict'
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


function ViewDevice(props) {
    let {id}=useParams();
    const {user,itemInBasket,getItem,logout}=useContext(userContext);
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
            getItem();
        }
    
            
        ).catch(error=>{
            console.log(error)
        });
      

    }
    if(loading){
        return <h2>Loading...</h2>
    }

    else{
        return (
            <div>
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>collections</h6>
                    </div>
    
                </div>
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 border-end">
                             {/* <img src=""  className="w-100"alt="device image" /> */}
                             <Pict src={"http://127.0.0.1:8000/"+device.image_path } className='w-100'/>
                           </div>
                           <div className="col-md-8">
                               <h4>
                               {device.description}
                                   <span className="float-end btn-sm btn-danger badge badge-pil">{device.modele.name}</span>
                               </h4>
                               <p>{device.modele.description}</p>
                               <h4 className="mb-1">
                               {device.price}
                                   <s className="ms-2">{device.price}</s>
                               </h4>
                               <div>
                                   <label htmlFor="" className="btn-success">in stock</label>
                               </div>
                               <div className='row'>
                                 <div className="col-md-3 mt-3">
                                     <div className="input-group">
                                         <button type='button' className='input-group-text' onClick={handleDecrement}>-</button>
                                         {/* <input type="text" className="form-control text-center"value={quantity}  /> */}
                                          <div className="form-control text-center">{quantity}</div>
                                         <button type='button' className='input-group-text' onClick={handleIncrement}>+</button>
    
                                     </div>
    
                                 </div>
                                 <div className="col-md-3 mt-3">
                                     <button className="btn btn-primary w-100"  onClick={handleBasket}>Add to cart</button>
    
                                 </div>
                               </div>
                               <div className="col-md-3 mt-3">
                                     <button className="btn btn-danger w-100">Add to wishlist</button>
    
                                 </div>
    
                           </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    
    
}

export default ViewDevice
