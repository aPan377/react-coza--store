import React from "react";

import { AiOutlineClose } from "react-icons/ai";

const SideShoppingCartProduct = (props) => {
  return (
    <div className="product--cart-container">
      <div
        className="product--cart--image--container"
        id={props.id}
        onClick={props.deleteProduct}
      >
        <img src={props.image} />
        <span>
          <AiOutlineClose />
        </span>
      </div>
      <div className="product--cart--info--container">
        <div>
          <p>Title: {props.title}</p>
          <p>Size: {props.size}</p>
          <p>Color: {props.color}</p>
        </div>
        <div>
          {props.amount} x {props.price}$
        </div>
      </div>
    </div>
  );
};

export default SideShoppingCartProduct;
