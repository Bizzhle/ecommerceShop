import { Cancel, FilterList } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ProductCard from "../components/ProductCard";
import Sidemenu from "../components/Sidemenu";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sidemenu, setSidemenu] = useState(false);
  const showSidemenu = () => setSidemenu(!sidemenu);
  console.log(sidemenu);

  const title = "sort ";

  async function handleFilter(category) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    setProducts(data);
    console.log("clickeed");
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="products">
      <section className="products_bar">
        {/* <div className="products_bar_searchbar">
          <SearchBar />
        </div>
        <div className="products_bar_selectbar">
          <SelectBar title={title} />
        </div> */}
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
              handleFilter={handleFilter}
              products={products}
            />
          </div>
        </div>
      </section>
      <div className="products_container" onClick={showSidemenu}>
        <div className="products_container_sidemenu">
          <Sidemenu handleFilter={handleFilter} products={products} />
        </div>
        <section className="products_card">
          {products &&
            products.map((value) => (
              <ProductCard key={value.id} value={value} />
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
