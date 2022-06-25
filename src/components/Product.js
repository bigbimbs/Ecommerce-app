import React from "react";

const Product = (props) => {
  return (
    <div className="product-item">
      <div>
        <img className="product-image" src={props.img} alt="product" />
      </div>
      <p className="product-title text-center">{props.title}</p>
      <h4 className="text-center">From {props.price}</h4>
      {props.children}
    </div>
  );
};

export default Product;
