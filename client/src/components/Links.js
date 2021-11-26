import React, { useState } from "react";
// import {
//   Divider,
//   Avatar,
//   Typography,
//   Box,
//   Tooltip,
//   IconButton,
//   ListItemIcon,
// } from "@mui/material";
// import { Logout, Settings, PersonAdd } from "@mui/icons-material";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { PersonOutlineOutlined } from "@mui/icons-material";
import { Mainmenu } from "../mainmenu";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links">
      {Mainmenu.map((item) => (
        <div className="links_dropdown" key={item.id}>
          <p className="links_dropdown_dropTitle">
            <Link to={item.path}>{item.title}</Link>{" "}
          </p>
          <ul className="links_dropdown_dropContent">
            {item.items.map((v) => (
              <li key={Math.random()}>{v.category}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
