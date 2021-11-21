import React, {useState} from 'react';
import "./productlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummydata';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export default function ProductList() {
    const [products, setProducts] = useState(productRows);

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                <div className="productListItem">
                    <img src={params.row.img} className="productListImg" alt="" />
                    {params.row.name}
                </div>
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
                  <Link to={"/product/" + params.row.id}>
                    <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
    
    ]

    const handleDelete = (id) => {
        setProducts(products.filter((item) => item.id !== id))
    }
    return (
        <div className="productList">
            <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
