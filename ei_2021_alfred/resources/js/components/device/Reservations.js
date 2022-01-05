import React,{useState,useEffect} from 'react'
import Api from '../helpers/Api';
import Pict from '../helpers/Pict';
import { useHistory } from 'react-router-dom';


function Reservations() {
    const [orders, setOrders] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        Api().get("/myReservations").then(res=>{
            setOrders(res.data.reservations)
            setloading(false)
        }).catch()
    }, [])
    const reportItem=(e,reservation_id)=>{   
    const clicked=e.currentTarget
    clicked.innerText="Reporting"
    
  Api().put('/reservation/'+reservation_id).then(res=>{
    clicked.className="btn btn-danger"
    clicked.innerText="Reported"
    clicked.active=false
  }).catch(err=>{                           
    clicked.innerText="Report"
  })
    }
    if(loading){
        return (
            <div className="spinner-border text-primary" role="status">
            
             </div>
        )

        
    }
   
    else if(orders.length>0){
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th >Image</th>
                        <th>device</th>
                        <th>EndDate</th>
                        <th>Print bill</th>
                        <th>Report breakdown</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        
                        { orders.map((item,i)=>{
                            
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                <td><Pict src={"http://127.0.0.1:8000/"+item.device.image_path}></Pict></td> 
                                <td>{item.device.description}</td>
                                <td>{item.endDate}</td>
                                <td>print bill</td>
                                <td><button className="btn btn-primary" onClick={(e)=>reportItem(e,item.id)}>Report</button></td>
                           </tr>
                            )
                            
                        })

                        }

                    </tbody>
                    <tfoot >
                        <tr>
                        <td>total</td>
                        <td>total</td>
                       
                        </tr>
                    </tfoot>

                </table>
                
                
                
            </div>
        )
    }
    else{
        return <h2>No data to display</h2>
    }
   
}

export default Reservations
