import React from "react";
import OLXApp from "./OLXApp";
import Product from "./Product";
import "../style/Home.css";

function Home() {
  return (
    <div>
      <div className="cover"></div>
      <div className="product-gallery">
        <h2>Fresh recommendations</h2>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="load-more">
          <button>Load more</button>
        </div>
      </div>
      <OLXApp />
    </div>
  );
}

export default Home;
