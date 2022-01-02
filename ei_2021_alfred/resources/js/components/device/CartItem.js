import React,{useState,useEffect} from 'react'
import Api from '../helpers/Api';
import Pict from '../helpers/Pict';
import { useHistory } from 'react-router-dom';




function CartItem() {
    var totalPrice=0
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(true)
    let history=useHistory()

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
    console.log("basket deleted")
    clicked.closest("tr").remove()
}
    
).catch()

}


    if(loading){
        return (
            <div className="spinner-border text-primary" role="status">
            
             </div>
        )

        
    }
    else{
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
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
                                <td><Pict src={"http://127.0.0.1:8000/"+item.device.image_path}></Pict></td> 
                                 
                                <td>{item.device_id}</td>
                                <td>{item.device.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.device.price*item.quantity}</td>
                                <td><button className="btn" onClick={(e)=>removeItem(e,item.id)}>Remove</button></td>
                           </tr>
                            )
                            
                        })

                        }

                    </tbody>
                    <tfoot >
                        <tr>
                        <td>Total</td>
                        <td>{totalPrice}</td>
                        </tr>
                    </tfoot>

                </table>
                <button className="btn btn-primary" onClick={handlePayment}>Payer</button>
                
                
            </div>
        )

    }
    
    
    
  
}

export default CartItem








































































































