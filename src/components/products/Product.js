import React, { useState } from "react";
import Modal from "../product detail/Product_detail_modal";

const Product = ({ id, img, title, price, description }) => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      {modalStatus ? (
        <Modal
          id={id}
          img={img}
          title={title}
          price={price}
          description={description}
          modalStatus={modalStatus}
          setModalStatus={() => setModalStatus(!modalStatus)}
        />
      ) : (
        ""
      )}
      <article className="product--container" id={id}>
        <div className="product--image--container">
          <div>
            <img src={img} alt="Product Image" />
            <p onClick={() => setModalStatus(!modalStatus)}>quick view</p>
          </div>
        </div>
        <div>
          <p>{title}</p>
        </div>
        <p>${price}</p>
      </article>
    </>
  );
};

export default Product;
