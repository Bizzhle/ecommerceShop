import React, { useState } from "react";
import {
  Menu,
  PersonOutlineOutlined,
  Search,
  ShoppingBagOutlined,
  Cancel,
} from "@mui/icons-material";
import UserMenu from "./UserMenu";
import { Mainmenu } from "../mainmenu";
import { Link } from "react-router-dom";
import { Accordion } from "./Accordion";
import Links from "./Links";

export default function TopBar() {
  const [sidebar, setSidebar] = useState(false);

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
          <span className="topbar_container_left_logo">Webshopper</span>
        </div>
        <div className="topbar_container_center">
          <Links />
          {/* {Mainmenu.map((item) => (
            <div key={Math.random()} className="topbar_container_center_links">
              <Link to={item.path}>{item.title}</Link>
            </div>
          ))} */}
        </div>
        <div className="topbar_container_right">
          <div className="topbar_container_right_iconContainer">
            <Search sx={{ fontSize: 30 }} />
          </div>
          <div className="topbar_container_right_iconContainer">
            <UserMenu />
          </div>
          <div className="topbar_container_right_iconContainer">
            <ShoppingBagOutlined sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
