import React, { useEffect, useMemo, useState } from 'react'
import "./singleproduct.css"
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { Publish } from '@mui/icons-material';
import { userRequest } from '../../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../context/action-creators';



export default function SingleProduct() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [productStats, setProductStats] = useState([])
    const dispatch = useDispatch()


    const product = useSelector(state => 
        state.product.products.find((product) => product._id === productId));

  const [inputs, setInputs] = useState({product});
  const [title, setTitle] = useState(product.title)
  const [desc, setDesc] = useState(product.desc);
  const [price, setPrice] = useState(product.price);
  const [inStock, setInStock] = useState("");


  const products = {...product, title, desc, price}
  const id = productId

  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, products, dispatch)
  }
  

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getPStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => (
            a._id - b._id
        ))
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Sales": item.total },
          ])
        );
      } catch {}
    };
    getPStats();
  }, [MONTHS, productId]);

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
                    <Chart data={productStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="singleProductTopRight">
                        <div className="singleProductInfoTop">
                            <img src={product.img} alt="" className="singleProductInfoImg" />
                        </div>
                        <div className="singleProductInfoBottom">
                                <span className="singleProductName">{product.title}</span>

                                <div className="singleProductInfoItem">
                                    <span className="singleProductInfoKey">
                                        id:
                                    </span>
                                    <span className="singleProductInfoValue">{product._id}</span>
                                </div>
                                <div className="singleProductInfoItem">
                                    <span className="singleProductInfoKey">
                                        sales:
                                    </span>
                                    <span className="singleProductInfoValue">5000</span>
                                </div>
                                <div className="singleProductInfoItem">
                                    <span className="singleProductInfoKey">
                                        in stock:
                                    </span>
                                    <span className="singleProductInfoValue">{product.inStock ? "yes" : "no"}</span>
                                </div>
                        </div>
                    </div>
            </div>
            <div className="singleProductBottom">
                <form onSubmit={handleSubmit} className="singleProductForm">
                    <div className="singleProductFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" value={title} placeholder={product.title} onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="">Product Description</label>
                        <input type="text" value={desc} placeholder={product.desc} onChange={(e) => setDesc(e.target.value)} />
                        <label htmlFor="">Price</label>
                        <input type="number" value={price} placeholder={product.price} onChange={(e) => setPrice(e.target.value)} />
                        <label htmlFor="">
                            In Stock
                        </label>
                        <select  name="inStock"  id="inStock"   onChange={(e) => setInStock(e.target.value)}> 
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
                        <button type="submit" className="singleProductButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
