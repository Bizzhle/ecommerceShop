import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import SelectBar from "./SelectBar";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../context/index";
import { bindActionCreators } from "redux";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

import { publicRequest } from "../requestMethods";

export default function SingleProduct() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  console.log(products);

  const { addProduct, getProductId } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await publicRequest.get(`/products/find/${id}`);
      const data = await res.data;
      setProducts(data);
    };

    fetchProductData();
  }, [id]);

  const handleClick = (id) => {
    addProduct(id);
  };

  return (
    <div className="">
      <div className="single-product wrapper">
        <div className="single-product_container">
          <div className="single-product_container_image-container">
            <div className="image">
              <img src={products.img} alt="" />
            </div>
          </div>

          <div className="single-product_container_info ">
            <div className="single-product_container_info_container">
              <h3>{products.title}</h3>
              <div className="single-product_container_info_price">
                <p className="pr-2 text-xl ">€{products.price}</p>
                <p className="">VAT included</p>
              </div>

              <button
                className="single-product_container_info_button"
                onClick={() => handleClick(products)}
              >
                Add to bag
              </button>

              <div className="single-product_container_info_card-info ">
                <ul className="">
                  <li className="border-b border-gray-400   p-4 text-center">
                    shipped by webshopper
                  </li>
                  <li className="border-b border-gray-400 p-4">
                    <p>fast delivery</p>
                    <p>1-3 working day</p>
                    <span className="flex justify-between">
                      <p>Fast delivery</p>
                      <p>10 EUR</p>
                    </span>
                  </li>

                  <li className="border-b border-gray-400 p-4">
                    <p>deliver</p>
                    <p>3-5 working days</p>
                    <span className="flex justify-between">
                      <products>Standard delivery</products>
                      <p>Free</p>
                    </span>
                  </li>

                  <li className="border-b border-gray-400 p-4">
                    Free Delivery and free returns
                  </li>

                  <li className=" p-4">
                    <p>30 days return policy</p>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="single-product_container_info_border"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="accordion ">
                <span>Description</span>
                <span>{!isOpen ? <AiOutlineDown /> : <AiOutlineUp />}</span>
              </div>
              {isOpen && (
                <div className="accordion-panel">
                  <p>{products.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
