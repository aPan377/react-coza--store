import React from "react";

const Product = ({ img, title, price }) => {
  return (
    <article className="product--container">
      <div className="product--image--container">
        <div>
          <img src={img} alt="Product Image" />
          <p>quick view</p>
        </div>
      </div>
      <div>
        <p>{title}</p>
      </div>
      <p>${price}</p>
    </article>
  );
};

export default Product;
