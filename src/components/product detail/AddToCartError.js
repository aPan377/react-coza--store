import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddToCartError = ({ toggleError }) => {
  return (
    <div>
      <div>Please, select size or color</div>
      <div onClick={toggleError}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default AddToCartError;
