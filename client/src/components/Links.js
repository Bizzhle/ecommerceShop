import React from "react";
import { SearchSharp } from "@mui/icons-material";
import { Mainmenu } from "../mainmenu";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links">
      <div className="links_wrapper">
        <p className="links_wrapper_dropTitle">
          <Link to="/product">Products</Link>{" "}
        </p>
        <div className="links_wrapper_search">
          <input type="search" name="" id="" placeholder="search" />
          <span className="searchbtn">
            <SearchSharp />
          </span>
        </div>
        {/* <ul className="links_dropdown_dropContent">
            {item.items.map((v) => (
              <li key={Math.random()}>{v.category}</li>
            ))}
          </ul> */}
      </div>
    </div>
  );
}
