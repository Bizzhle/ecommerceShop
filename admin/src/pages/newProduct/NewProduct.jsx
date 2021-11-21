import React, { useState} from 'react';
import "./newProduct.css"

export default function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        setInputs((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleCategory = (e) => {
        setCategories(e.target.value.split(","))
    }

    return (
        <div className="newProduct">
            <h1 className="createProductTitle">New Product</h1>
            <form action="" className="createProductForm">
                <div className="createProductItem">
                    <label htmlFor="">Image</label>
                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="createProductItem">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" placeholder="products" onChange={handleChange} />
                </div>
                <div className="createProductItem">
                    <label htmlFor="">Description</label>
                    <input type="text" name="desc" placeholder="description" onChange={handleChange} />
                </div>
                <div className="createProductItem">
                    <label htmlFor="">Price</label>
                    <input type="number" name="price" placeholder="100" onChange={handleChange} />
                </div>
                <div className="createProductItem">
                    <label htmlFor="">Categories</label>
                    <input type="text" name="category" placeholder="jeans" onChange={handleCategory} />
                </div>
                <div className="createProductItem">
                    <label htmlFor="">Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button className="createProductButton">
                    Create
                </button>
            </form>
        </div>
    )
}
