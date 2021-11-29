import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";

export default function Sidemenu({ handleFilter, showSidemenu }) {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  // const [isDeepOpen, setIsDeepOpen] = useState(null);

  const ShowAccordion = (id) => setIsOpen((prev) => (prev === id ? null : id));
  // const ShowDeepAccordion = (id) =>
  //   setIsDeepOpen((prev) => (prev === id ? null : id));

  function handleSort(value) {
    handleFilter(value);
    showSidemenu();
    console.log("clicked");
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="sidemenu">
      <div className="sidemenu_wrapper">
        <h3>categories</h3>
        {products.map((item) => (
          <div key={Math.random()} className="sidemenu_wrapper_accordion">
            <div className="sidemenu_wrapper_accordion_item">
              <span>{item.title.slice(0, 10)}</span>

              {item.category.length > 0 > 0 ? (
                <span>
                  {isOpen === item.id ? (
                    <KeyboardArrowUp
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item.id)}
                    />
                  ) : (
                    <KeyboardArrowDown
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item.id)}
                    />
                  )}
                </span>
              ) : (
                ""
              )}
            </div>
            {isOpen === item.id ? (
              <div
                className="sidemenu_wrapper_accordion_category"
                onClick={() => handleSort(item.category)}
              >
                {" "}
                <Remove /> <p>{item.category} </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
