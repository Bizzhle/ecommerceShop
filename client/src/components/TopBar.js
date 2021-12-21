import React, { useState } from "react";
import { Menu, Search, ShoppingBagOutlined, Cancel } from "@mui/icons-material";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";
import { Accordion } from "./Accordion";
import Links from "./Links";
import { useSelector } from "react-redux";

export default function TopBar() {
  const [sidebar, setSidebar] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const quantity = cartItems.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="topbar">
      <div className="topbar_container">
        <div className={sidebar ? "sidemenu" : "hidden"}>
          <Accordion sidebar={sidebar} showSidebar={showSidebar} />
        </div>
        <div className="topbar_container_left">
          <span
            className="topbar_container_left_hamburger"
            onClick={showSidebar}
          >
            {sidebar ? (
              <Cancel sx={{ fontSize: 30 }} />
            ) : (
              <Menu sx={{ fontSize: 30 }} />
            )}
          </span>
          <Link to="/">
            <span className="topbar_container_left_logo">Webshopper</span>
          </Link>
        </div>
        <div className="topbar_container_center">
          <Links />
        </div>
        <div className="topbar_container_right">
          <div className="topbar_container_right_iconContainer">
            <Search sx={{ fontSize: 30 }} />
          </div>
          <div className="topbar_container_right_iconContainer">
            <UserMenu />
          </div>
          <Link to="/cart">
            <div className="topbar_container_right_iconContainer">
              <ShoppingBagOutlined sx={{ fontSize: 30 }} />
              <div className="topbar_container_right_iconContainer_cartNum">
                {quantity >= 1 ? quantity : 0}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
