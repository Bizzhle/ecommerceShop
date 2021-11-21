import React, { useEffect, useMemo, useState } from 'react'
import "./singleproduct.css"
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { Publish } from '@mui/icons-material';
import { productData } from "../../dummydata";
import { productRows } from "../../dummydata";



export default function SingleProduct() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    console.log(productId);
    console.log(productRows[0].id);
    console.log(product);

    useEffect(() => {
        // const data = productRows.find((product) => product.id === productId)
        // setProduct(productRows.find((product) => product.id === productId))
   
        setProduct(productRows[0].id)
    }, [productId])

    return (
        <div className="singleProduct">
            <div className="singleProductWrapper">
                <h1 className="singleProductTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="singleProductCreateButton">Create</button>
                </Link>
            </div>
            <div className="singleProductTop">
                <div className="singleProductTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="singleProductTopRight">
                        <div className="singleProductInfoTop">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singleProductInfoImg" />
                            <span className="singleProductName">{product.title}</span>
                        </div>
                            <div className="singleProductInfoBottom">
                                    <div className="singleProductInfoItem">
                                        <span className="singleProductInfoKey">
                                            id:
                                        </span>
                                        <span className="singleProductInfoValue">{product.id}</span>
                                    </div>
                                    <div className="singleProductInfoItem">
                                        <span className="singleProductInfoKey">
                                            sales
                                        </span>
                                        <span className="singleProductInfoValue">5000</span>
                                    </div>
                                    <div className="singleProductInfoItem">
                                        <span className="singleProductInfoKey">
                                            in stock
                                        </span>
                                        <span className="singleProductInfoValue">{product.inStock}</span>
                                    </div>
                            </div>
                    </div>
            </div>
            <div className="singleProductBottom">
                <form action="" className="singleProductForm">
                    <div className="singleProductFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder={product.title} />
                        <label htmlFor="">Product Description</label>
                        <input type="text" placeholder={product.desc} />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder={product.price} />
                        <label htmlFor="">
                            In Stock
                        </label>
                        <select  name="inStock" id="inStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div> 
                    <div className="singleProductFormRight">
                        <div className="singleProductUpload">
                            <img src={product.img} alt="" className="singleProductUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="singleProductButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
