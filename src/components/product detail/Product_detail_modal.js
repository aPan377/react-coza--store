import React, { useEffect, useState, useRef } from "react";

import { VscChromeClose } from "react-icons/vsc";
import { AiFillHeart, AiOutlineTwitter } from "react-icons/ai";
import { GrGooglePlus, GrFacebookOption } from "react-icons/gr";

import Slider from "./Slider";
import DropDownSize from "./DropDownSize";
import DropDownColor from "./DropDownColor";
import AddToCartError from "./AddToCartError";
import AddToCartSuccess from "./AddToCartSuccess";

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/orderSlice";

const Product_detail_modal = (props) => {
  const dispatch = useDispatch();

  const [dropDownSize, setDropDownSize] = useState(false);
  const [dropDownColor, setDropDownColor] = useState(false);
  const [showError, setShowError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const idRef = useRef(props.id);
  const titleRef = useRef(props.title);
  const imgRef = useRef(props.img);
  const priceRef = useRef(props.price);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const amountRef = useRef(null);

  const containerDivRef = useRef(null);
  const modalBodyDivRef = useRef(null);

  const [amount, setAmount] = useState(1);

  function addToCart() {
    if (!sizeRef.current.value || !colorRef.current.value) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } else if (sizeRef.current.value && colorRef.current.value) {
      setShowError(false);
      const oldOrder = JSON.parse(localStorage.getItem("order")) || [];
      const newOrder = {
        id: idRef.current,
        title: titleRef.current,
        image: imgRef.current,
        price: priceRef.current,
        size: sizeRef.current.value,
        color: colorRef.current.value,
        amount: amountRef.current.value,
      };
      dispatch(addProduct(newOrder));
      oldOrder.push(newOrder);
      localStorage.setItem("order", JSON.stringify(oldOrder));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        closeModal();
      }, 5000);
    }
  }

  function handleAmountDecrement() {
    if (amount != 1) {
      setAmount((amount) => amount - 1);
    }
  }
  function handleAmountIncrement() {
    setAmount((amount) => amount + 1);
  }

  function closeModal() {
    props.setModalStatus();
  }

  function checkDropDownStatus(e) {
    const target = e.target.id;
    if (target === "sizeInput" && dropDownColor) {
      setDropDownColor((dropDownColor) => !dropDownColor);
    } else if (target === "colorInput" && dropDownSize) {
      setDropDownSize((dropDownSize) => !dropDownSize);
    }
  }

  useEffect(() => {
    function closeDropDownOutside(e) {
      const target = e.target.id;
      if (target !== "sizeInput" && target !== "colorInput") {
        setDropDownSize(false);
        setDropDownColor(false);
      }
    }
    function closeModalOutside(e) {
      if (e.target.id === containerDivRef.current.id) {
        closeModal();
      }
    }
    modalBodyDivRef.current.addEventListener("click", closeDropDownOutside);
    containerDivRef.current.addEventListener("click", closeModalOutside);

    return () => {
      if (modalBodyDivRef.current) {
        modalBodyDivRef.current.removeEventListener(
          "click",
          closeDropDownOutside
        );
      }
      if (containerDivRef.current) {
        containerDivRef.current.removeEventListener("click", closeModalOutside);
      }
    };
  }, []);

  return (
    <div
      className="product--detail--modal--container"
      id="product--detail--modal--container"
      ref={containerDivRef}
      aria-expanded={props.modalStatus}
    >
      <div
        className="modal--close"
        onClick={() => {
          closeModal();
        }}
      >
        <VscChromeClose />
      </div>
      <div className="product--detail--container" ref={modalBodyDivRef}>
        <div className="images--list--slider">
          <Slider img={props.img} />
        </div>
        <div className="product--detail--info">
          <div className="product--detail--header">
            <h1>{props.title}</h1>
            <p>{props.price}$</p>
            <p>{props.description}</p>
          </div>
          <div
            className="product--detail--inputs"
            onClick={(e) => checkDropDownStatus(e)}
          >
            <div className="product--detail--size">
              <DropDownSize
                inputVisibility={dropDownSize}
                toggle={() => setDropDownSize((dropDownSize) => !dropDownSize)}
                ref={sizeRef}
              />
            </div>
            <div className="product--detail--color">
              <DropDownColor
                inputVisibility={dropDownColor}
                toggle={() =>
                  setDropDownColor((dropDownColor) => !dropDownColor)
                }
                ref={colorRef}
              />
            </div>
            <div className="product--detail--amount--container">
              <div className="product--detail--amount">
                <div>Quantity</div>
                <div className="product--detail--amount--buttons">
                  <span onClick={handleAmountDecrement}>-</span>
                  <input type="text" readOnly value={amount} ref={amountRef} />
                  <span onClick={handleAmountIncrement}>+</span>
                </div>
              </div>
              <div className="product--detail--add" onClick={addToCart}>
                add to cart
              </div>
            </div>
          </div>
          <div className="product--detail--footer">
            <div>
              <AiFillHeart />
            </div>
            <div>
              <GrFacebookOption />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
            <div>
              <GrGooglePlus />
            </div>
          </div>
          <div className="addToCartError">
            {showError ? (
              <AddToCartError toggleError={() => setShowError(false)} />
            ) : (
              ""
            )}
          </div>
          <div className="addToCartSuccess">
            {showSuccess ? (
              <AddToCartSuccess toggleSuccess={() => setShowSuccess(false)} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_detail_modal;
