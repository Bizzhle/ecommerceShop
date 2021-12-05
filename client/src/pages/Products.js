import { Cancel, FilterList } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ProductCard from "../components/ProductCard";
import Sidemenu from "../components/Sidemenu";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../context/action-creators";

export default function Products() {
  const [sidemenu, setSidemenu] = useState(false);
  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();
  const showSidemenu = () => setSidemenu(!sidemenu);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const refreshPage = () => {
    window.location.reload(true);
    console.log("click");
  };

  return (
    <div className="products">
      <section className="products_bar">
        <div className="products_bar_filterbtn">
          <button
            onClick={showSidemenu}
            className="products_bar_filterbtn_button"
          >
            filter <FilterList />
          </button>
        </div>

        <div
          className={
            sidemenu ? "products_bar_sidemenus " : "products_bar_hidden"
          }
        >
          <Cancel onClick={showSidemenu} />

          <div className="products_bar_sidemenu_filter">
            <Sidemenu
              showSidemenu={showSidemenu}
              products={products}
              category={category}
              refreshPage={refreshPage}
            />
          </div>
        </div>
      </section>
      <div className="products_container" onClick={showSidemenu}>
        <div className="products_container_sidemenu">
          <Sidemenu
            // handleFilter={handleFilter}
            products={products}
            category={category}
            showSidemenu={showSidemenu}
          />
        </div>
        <section className="products_card">
          {products &&
            products.map((value) => (
              <ProductCard key={value._id} value={value} />
            ))}
        </section>
      </div>

      <section>
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
}
