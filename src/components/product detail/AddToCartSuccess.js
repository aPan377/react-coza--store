import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddToCartError = ({ toggleSuccess }) => {
  return (
    <div>
      <div>Product was successfully added!</div>
      <div onClick={toggleSuccess}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default AddToCartError;
