import React from "react";
import "../style/Product.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function Product() {
  return (
    <div className="product">
      <img
        src="https://apollo-singapore.akamaized.net/v1/files/5nyyeejf2nkj2-PK/image;s=1080x1080"
        alt=""
      ></img>
      <FavoriteBorderOutlinedIcon className="heart" />
      <div className="price">
        <h3>Rs. 62500</h3>
      </div>
      <div className="desc">2012 model Jeniun honda 125</div>
      <div className="price-and-date">
        <div className="price">Taramri, Islamabad</div>
        <div className="date">Today</div>
      </div>
    </div>
  );
}

export default Product;
