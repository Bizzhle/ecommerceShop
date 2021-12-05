import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductCategory } from "../context/action-creators";

// import { Link } from "react-router-dom";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";
import { publicRequest } from "../requestMethods";

export default function Sidemenu({
  showSidemenu,
  products,
  category,
  refreshPage,
}) {
  const [isOpen, setIsOpen] = useState(null);
  const dispatch = useDispatch();
  const ShowAccordion = (id) => setIsOpen((prev) => (prev === id ? null : id));

  async function handleFilter(category) {
    getProductCategory(dispatch, category);
  }

  function handleSort(value) {
    handleFilter(value);
    showSidemenu();
    console.log("clicked");
  }

  console.log(products);

  return (
    <div className="sidemenu">
      <div className="sidemenu_wrapper" onClick={refreshPage}>
        <h3>categories</h3>
        {category.map((item) => (
          <div key={Math.random()} className="sidemenu_wrapper_accordion">
            <div className="sidemenu_wrapper_accordion_item">
              <span>{item.title}</span>

              {item.categories.length > 0 ? (
                <span>
                  {isOpen === item.id ? (
                    <KeyboardArrowUp
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item.id)}
                    />
                  ) : (
                    <KeyboardArrowDown
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item._id)}
                    />
                  )}
                </span>
              ) : (
                ""
              )}
            </div>
            {isOpen === item._id ? (
              <ul className="sidemenu_wrapper_accordion_category">
                {/*  <p>{item.categories} </p> */}
                {item.categories.map((i) => (
                  <li key={Math.random()} onClick={() => handleSort(i)}>
                    - {i}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
