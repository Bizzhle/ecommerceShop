import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";

import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { actionCreators } from "../context/index";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const KEY = process.env.REACT_APP_STRIPE;

export default function Cart() {
  // const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  // const total = useSelector((state) => state.cart.total);
  const [data, setData] = useState({});
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const quantity = products.reduce((acc, product) => acc + product.quantity, 0);
  const amount = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const total = amount.toFixed(2);

  const { addQuantity, removeProduct, deleteProduct } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(products);
  console.log(quantity);
  console.log(total);

  useEffect(() => {
    const makeRequest = () => {
      try {
        fetch("http://localhost:4000/api/v1/checkout/payment/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tokenId: stripeToken.id, total }),
        })
          .then((res) => res.json())
          .then((data) => setData(data));
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, history, total]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    console.log("clicked");
  };

  const handleAdd = (id) => {
    addQuantity(id);
  };

  const handleSub = (id) => {
    removeProduct(id);
  };

  return (
    <div className="cartContainer">
      <div className="cart">
        {products.length > 0 ? (
          <div className=" cart_wrapper">
            <div className="cart_wrapper_sections">
              {quantity >= 1 ? (
                <div>
                  {products.map((value) => (
                    <section
                      key={Math.random()}
                      className="cart_wrapper_sections__information cart__bg-color"
                    >
                      <h1>
                        {value.quantity}{" "}
                        {value.quantity === 1 ? "item" : "items"}{" "}
                      </h1>

                      <h3>Shipped by textil</h3>

                      <div className="cart_wrapper_sections__information_info  ">
                        <div className="image">
                          <img src={value.image} alt="" />
                        </div>
                        <div className="cart_wrapper_sections__information_info_productDetail">
                          <div className="cart_wrapper_sections__information_info_productDetail_details">
                            <p className="productName">{value.title}</p>
                            <p className="productID">{value.category}</p>
                            <p className="productSize">Size: 37.5</p>

                            <div className="cart_wrapper_sections__information_info_productDetail_details_amountContainer">
                              <div
                                className="remove"
                                onClick={() => handleSub(value.id)}
                              >
                                <BsDashLg style={{ height: 25, width: 25 }} />
                              </div>
                              <div className="amount">
                                {quantity >= 1 ? value.quantity : 0}
                              </div>
                              <div
                                className="add"
                                onClick={() => handleAdd(value.id)}
                              >
                                <BsPlusLg style={{ height: 25, width: 25 }} />
                              </div>
                            </div>

                            <p className="productPrice">
                              <b>{value.price}€</b>
                            </p>
                          </div>
                          <div className="cart_wrapper_sections__information_info_productDetail_delete">
                            <RiDeleteBin5Line
                              style={{ width: 35, height: 35 }}
                              onClick={() => handleDelete(value.id)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="cart_wrapper_sections__information_reserved">
                        <AiOutlineInfoCircle />{" "}
                        <p>Items placed in this bag are not reserved.</p>
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <section className="cart_delivery cart__bg-color">
                  <h3>Your bag is empty</h3>
                  <p>
                    <Link to="/product">go to shop</Link>
                  </p>
                </section>
              )}

              <section className="cart_delivery cart__bg-color">
                <h3>Estimated Delivery</h3>
                <p>11.11.2018</p>
              </section>

              <section className="cart_delivery cart__bg-color">
                <h3>We accept</h3>
                <div>
                  <FaCcMastercard
                    style={{ width: 35, height: 35, marginRight: 20 }}
                  />
                  <FaCcVisa
                    style={{ width: 35, height: 35, marginRight: 20 }}
                  />
                  <FaCcPaypal
                    style={{ width: 35, height: 35, marginRight: 20 }}
                  />
                </div>
              </section>
            </div>

            <div className="cart_total cart__bg-color">
              <h3>Total</h3>
              <div className="item">
                <span>
                  <p className="subtotal">subtotal</p>
                  <p className="price">{products ? total : ""} €</p>
                </span>
                <hr />
                <span>
                  <p className="subtotal">
                    <b>Total (VAT included)</b>
                  </p>
                  <p className="price">{total} €</p>
                </span>
              </div>
              <StripeCheckout
                name="textilshop"
                billingAddress
                shippingAddress
                description={`Your total is ${products[0].price * quantity}`}
                amount={products[0].price * quantity * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button>Proceed to checkout</button>
              </StripeCheckout>
            </div>
          </div>
        ) : (
          <section className="cart_delivery cart__bg-color">
            <h3>Your bag is empty</h3>
            <p>
              <Link to="/product">go to shop</Link>
            </p>
          </section>
        )}
      </div>
      <Newsletter />

      <Footer />
    </div>
  );
}
