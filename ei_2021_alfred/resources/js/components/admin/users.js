import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import Api from '../helpers/Api';
import {Link} from 'react-router-dom'
import PopModal from '../helpers/Modal';

//import { Link } from '@material-ui/core';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
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
            
            users:rows,
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
        console.log("asali yango");
       // console.log(res.data);
        
    }).catch(error=>{
      console.log("eboyi kokota");
    });
       
    }
    handleDelete(){
      s
    }
    render(){
        return (
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={this.state.users} columns={this.state.columns} pageSize={5} checkboxSelection />
              <button  onClick={this.handleClick} className='btn btn-primary btn-lg'> Create new user</button>
              <Link to='/newuser'>Create</Link>
              <Link to='/updateUser/21'>Update</Link>
              <Link to={this.handleDelete}>delete</Link>
              <PopModal/>
              
            </div>
          ); 
    }
}

