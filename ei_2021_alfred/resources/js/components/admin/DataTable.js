
import React, { useContext, useEffect, useState } from 'react';
import { useStateManager } from 'react-select';
import { DataGrid } from '@material-ui/data-grid';
import Api from '../helpers/Api';
import { Button } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {Link,useHistory} from 'react-router-dom'

function DataTable() {
    const history=useHistory()
    const editUser=(e)=>{
        e.preventDefault()
        console.log("coucou"+id)
    }
   
    const [rows, setrows] = useState([])
    const [columns, setcolumns] = useState( [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'role', headerName: 'Role', width: 130 },
        {
          field: 'phone',
          headerName: 'Phone',
          type: 'number',
          width: 160,
        },
        {
          field: 'active',
          headerName: 'Active',
          
          sortable: true,
          width: 50,
        
        },
        {
            field: 'actions',
            headerName: 'Action',

            sortable: false,

            width: 130,
            disableClickEventBubbling:true,
            renderCell:()=>{
                return(
                    <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={()=>editUser()}>
                    Edit
                  </Button>
                )
            }
          
          },
          {
            
                field: "delete",
                headerName: "Delete",
                sortable: false,
                width: 130,
                disableClickEventBubbling: true,
                renderCell: () => {
                  return (
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  );
                }
              
          }
         
      ])
      useEffect(() => {
        Api().get('/users').then(res=>{
           setrows(res.data.data)   
        }).catch(error=>{
          console.log("ok ok");
        });
    }, [])
    return (
        
        <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}

export default DataTable
