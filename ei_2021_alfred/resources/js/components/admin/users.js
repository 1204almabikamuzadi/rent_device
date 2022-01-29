import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import Api from '../helpers/Api';
import {Link} from 'react-router-dom'
import PopModal from '../helpers/Modal';

//import { Link } from '@material-ui/core';

const columns = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'role', headerName: 'Role', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 90,
  },
  {
    field: 'active',
    headerName: 'Active',
    
    sortable: true,
    width: 160,
  
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default class UsersTab extends React.Component {
    constructor(props){
        super(props);
        this.state={
            rows:rows,
            columns:columns
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);

    }
     handleClick(){
     this.props.history.push('/newuser'); 
     console.log("i can wake it up")
     }
    componentDidMount(){
      
      Api().get('/users').then(res=>{
      console.log(data)
      this.setState({rows:res.data})
        
    }).catch(error=>{
      console.log("eboyi");
    });
       
    }
    handleDelete(){
      
        console.log("user succefully deleted")
    
    }
    render(){
        return (
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={this.state.users} columns={this.state.columns} pageSize={5} checkboxSelection />
              {/* <button  onClick={this.handleClick} className='btn btn-primary btn-lg'> Create new user</button> */}
              {/* <Link to='/newuser'>Create</Link>
              <Link to='/updateUser/21'>Update</Link>
              <Link to={this.handleDelete}>delete</Link> */}
              {/* <PopModal/> */}
              
            </div>
          ); 
    }
}

