import React,{useState,useEffect,useContext} from 'react'
import {userContext} from '../Context';
import Api from '../helpers/Api';
import Pict from '../helpers/Pict';
import { useHistory } from 'react-router-dom';




function CartItem() {
    const mystyle = {
        width:'50px',
        height:'50px'
      };
    var totalPrice=0
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(true)
    let history=useHistory()
    const {getItem}=useContext(userContext);

    useEffect(() => {
       Api().get('/basket').then(res=>{
        console.log(res.data.basket)
           setcart(res.data.basket)
           setloading(false)
       }

       ).catch();
    }, [])
    const handlePayment=(e)=>{
        e.preventDefault()
        Api().get("/payconfirm").then(res=>{
            history.push("/profile")
        }

        ).catch()
      
    console.log("payment ready")
        }
const removeItem=(e,basket_id)=>{
e.preventDefault()
const clicked=e.currentTarget
clicked.innerText="Removing"
Api().delete('/basket/'+basket_id).then(res=>{
    clicked.closest("tr").remove()
    getItem()
}
    
).catch()

}


    if(loading){
        return (
            <div className="spinner-border text-primary" role="status">
            
             </div>
        )

        
    }
    else if(cart&&cart.length>0){
        return (
            <div className='row'>
             <div className="col-2"></div>
             <div className="col-8">
             
            <div className="table table striped">
                <h1 className='text-center'>Basket Content</h1>
                <table className="table table-sm">
                    <thead>
                        <tr>
                        <th >Image</th>
                        <th>device</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>subTotal</th>
                        <th>Remove</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        {cart.map((item,i)=>{
                            totalPrice+=item.device.price*item.quantity
                            return(
                                <tr key={item.id}>
                                <td><Pict src={"http://127.0.0.1:8000/"+item.device.image_path} style={mystyle}></Pict></td> 
                                 
                                <td>{item.device.name}</td>
                                <td>{item.device.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.device.price*item.quantity}</td>
                                <td><button className="btn text-danger" onClick={(e)=>removeItem(e,item.id)}>Remove</button></td>
                           </tr>
                            )
                            
                        })

                        }

                    </tbody>
                    

                </table>

            
                
                
            </div>
            <div class="card">
                <h3 class="card-header">Total :{totalPrice}</h3>
                <div class="card-body">
    
                    <button className="btn btn-primary " onClick={handlePayment}>Passer commande</button>
                </div>
            </div>
            </div>
            <div className="col-2"></div>
            </div>
        )

    }
    else{
        return(
            <div className="jumbotron jumbotron-fluid ">
     
     <div className="jumbotron jumbotron-fluid danger" >
  <div className="container">
    <h1 className="display-4">No data to display</h1>
    <p className="lead">Please make your choices</p>
      </div>
     </div>

            </div>
        )
    }
    
    
    
  
}

export default CartItem








































































































