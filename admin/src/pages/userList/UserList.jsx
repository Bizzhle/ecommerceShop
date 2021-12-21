import React, { useState} from 'react'
import "./userlist.css";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import {DeleteOutline} from '@mui/icons-material';
import { userRows } from "../../dummydata";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className="userListUser">
                      <img className="userListImg" src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          }
        },
        { field: "email", headerName: "Email", width: 150 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
          },
          {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 150,
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
      ];
      
      
    return (
    
        <div className="userList">
           <Box
              sx={{
                height: 400,
                width: 1,
                '& .MuiDataGrid-cell--editable': {
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
                },
              }}
            >
              <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[5]}
              // checkboxSelection
              // disableSelectionOnClick
              />
            </Box>
        </div>
    )
}
