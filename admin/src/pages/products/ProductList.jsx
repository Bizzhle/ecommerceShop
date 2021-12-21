import React, {useState, useEffect} from 'react';
import "./productlist.css"
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, getProducts } from '../../context/action-creators';



export default function ProductList() {

    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch();


    useEffect(() => {
     getProducts(dispatch)
     
    }, [dispatch]);

       const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }


    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                  <Link to={"/product/" + params.row._id}>
                    <div className="productListItem">
                        <img src={params.row.img} className="productListImg" alt="" />
                        {params.row.title}
                    </div>
                </Link>
                )
            }
        },
        { field: "inStock", headerName: "Stock", width: 100 },
        {
            field: "price",
            headerName: "Price",
            width: 160,
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/product/" + params.row._id}>
                    <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    onClick={() => handleDelete(params.row._id)}
                  />
                </>
              );
            },
          },
         
    
    ]

 
    return (
        <div className="productList">
            
            <div className="singleProductWrapper">
                <h1 className="singleProductTitle">Products</h1>
                <Link to="/newProduct">
                    <button className="singleProductCreateButton">Create</button>
                </Link>
            </div>
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
                rows={products}
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={5}
                checkboxSelection
              />
            </Box>
        </div>
    )
}
