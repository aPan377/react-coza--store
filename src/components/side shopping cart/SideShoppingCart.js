import React, { useRef } from "react";

import SideShoppingCartProduct from "./SideShoppingCartProduct";

import { TfiClose } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/orderSlice";

const SideShoppingCart = (props) => {
  const containerRef = useRef(null);

  const orderList = useSelector((state) => state.order);
  const totalPrice = orderList
    .map((item) => item.price)
    .reduce((sum, currValue) => +sum + +currValue, 0)
    .toFixed(2);

  const dispatch = useDispatch();

  function closeShoppingCartOutside(e) {
    if (e.target == containerRef.current) {
      props.closeCart();
    }
  }

  return (
    <section
      className="side--shopping--cart--bg"
      aria-expanded={props.showShopCart}
      ref={containerRef}
      onClick={(e) => {
        closeShoppingCartOutside(e);
      }}
    >
      <div className="side--shopping--cart--container">
        <div className="side--shopping--cart--header">
          <div>Your order:</div>
          <div onClick={props.closeCart}>
            <TfiClose />
          </div>
        </div>
        <div className="side--shopping--cart--products">
          {orderList.length === 0
            ? "Shopping cart is empty"
            : orderList.map((item, index) => (
                <SideShoppingCartProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  size={item.size}
                  color={item.color}
                  amount={item.amount}
                  deleteProduct={(e) =>
                    dispatch(deleteProduct(e.currentTarget.id))
                  }
                />
              ))}
        </div>
        <div className="side--shopping--cart--totalprice--checkout">
          <div className="side--shopping--cart--totalprice">
            Total Price: {totalPrice}$
          </div>
          <div className="side--shopping--cart--checkout">Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default SideShoppingCart;
