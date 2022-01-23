import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Api from '../helpers/Api';
import ReactPaginate from 'react-paginate';
function Members() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        Api().get('/users').then(res=>{
           setusers(res.data.data)   
        }).catch(error=>{
          console.log("eboyi kokota");
        });
    }, [])
    const handledelete=(e,id)=>{
        e.preventDefault()
        
        Api().delete("/user/"+id).then(
            res=>{
                console.log("user deleted succesfully")
            }
        ).catch()

    }
    const pageClicked=(data)=>{
        console.log(data)
    }
    if(loading){
        return (
            <div className="spinner-border text-primary" role="status">
            
             </div>
        )


    }
    else if(users&&users.length>0){
        return (
            <div>
                <div className='py-3 bg-warning'>
                    <div className="container">
                        <h6>Users</h6>
                    </div>
    
               </div>
               <div className="py-3">
               <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th> 
                            </tr>    
                        </thead>
                        <tbody>
                            
                            { users.map((item,i)=>{
                                
                                return(
                                    <tr key={item.id}>
                                     <td>{item.id}</td>
                                    <td>{item.name}</td> 
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td><Link className='btn btn-success' to={'/updateUser/'+item.id}>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={(e)=>handledelete(e,item.id)}>Delete</button></td>
                               </tr>
                                )
                                
                            })
    
                            }
    
                        </tbody>
                        
    
                    </table>
                    <Link className='btn btn-primary' to='/newUser'>Newuser</Link>    
                </div>
    
               </div>
               
               <div>
                   <ReactPaginate
                     previousLabel={"previous"}
                     onPageChange={pageClicked}
                     nextLabel={"next"}
                     pageRangeDisplayed={7}
                     pageCount={6}
                     breakClassName={'page-item'}
                     breakLinkClassName={'page-link'}
                     containerClassName={'pagination d-flex justify-content-end'}
                     pageClassName={'page-item'}
                     pageLinkClassName={'page-link'}
                     previousClassName={'page-item'}
                     previousLinkClassName={'page-link'}
                     nextClassName={'page-item'}
                     nextLinkClassName={'page-link'}
                     activeClassName={'active'}
                   
                   />
               </div>
                
            </div>
        )

    }
    else{
        return(
            <div className="alert alert-warning" role="alert">
                No data to display
                </div>
        )
    }


    
}

export default Members
