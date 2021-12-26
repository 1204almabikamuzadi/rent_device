import React,{useState,useEffect} from 'react'
import Api from '../helpers/Api';
import Pict from '../helpers/Pict';




function CartItem() {
    var totalPrice=0
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
       Api().get('/basket').then(res=>{
        console.log(res.data.basket)
           setcart(res.data.basket)
           setloading(false)
       }

       ).catch();
    }, [])
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
                                <td>Remove</td>
                                

                           </tr>
                            )
                            
                            
                        })

                        }

                    </tbody>
                    <tfoot >
                        <td>Total</td>
                        <td>{totalPrice}</td>
                    </tfoot>

                </table>
                
                
            </div>
        )

    }
    
    
    
  
}

export default CartItem








































































































