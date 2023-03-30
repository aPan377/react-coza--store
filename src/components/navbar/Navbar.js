import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/icons/logo-01.png";

import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import SideShoppingCart from "../side shopping cart/SideShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarIsOpen, setnavbarIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const [showShopCart, setShowShopCart] = useState(false);

  const shopCartItemQty = useSelector((state) => state.order).length;

  function showNavbar() {
    navbarRef.current.setAttribute("aria-expanded", !navbarIsOpen);
    setnavbarIsOpen(!navbarIsOpen);
  }

  return (
    <>
      <header className="nav--container">
        <div className="nav--mobile">
          <div className="nav--mobile--primary">
            {/* primary--nav--block */}
            {/* logo image */}
            <div className="nav--mobile--primary--logo">
              <img src={logo} alt="logo" />
            </div>
            {/* logo image */}
            {/* mobile icons */}
            <div className="mobile--rightIcons">
              <div
                onClick={() => setShowShopCart(!showShopCart)}
                className="shopcart--quantity--container"
              >
                <FiShoppingCart />
                <div className="shopcart--quantity">{shopCartItemQty}</div>
              </div>
              <div>
                <AiOutlineHeart />
              </div>
              <div id="hamburgerMenu" onClick={() => showNavbar()}>
                {navbarIsOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
              </div>
            </div>
          </div>
          <div
            className="nav--mobile--second--third"
            aria-expanded="false"
            ref={navbarRef}
          >
            <div className="nav--secondary">
              {/* secondary--nav--block*/}
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <Link>Features</Link>
                  <span className="hot">Hot</span>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
              {/* secondary--nav--block*/}
            </div>
            <div className="nav--third">
              {/* third--nav--block */}
              <p>Free shipping for standard order over $100 </p>
              <ul>
                <li>
                  <Link>Help & FAQs</Link>
                </li>
                <li>
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>EN</Link>
                </li>
                <li>
                  <Link>USD</Link>
                </li>
              </ul>
              {/* third--nav--block */}
            </div>
          </div>
        </div>
        <div className="nav--computer">
          <div className="nav--primary">
            {/* desktop navbar block*/}
            <div className="desktop--logo">
              <img src={logo} alt="logo" />
            </div>
            {/* desktop navbar block*/}
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link>Features</Link>
                <span className="hot">Hot</span>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            {/* desktop navbar block*/}
            <div className="desktop--icons">
              <div
                className="shopcart--quantity--container"
                onClick={() => setShowShopCart(!showShopCart)}
              >
                <FiShoppingCart />
                <span className="shopcart--quantity">{shopCartItemQty}</span>
              </div>
              <div>
                <AiOutlineHeart />
              </div>
            </div>
            {/* desktop navbar block*/}
          </div>
          <div className="nav--secondary">
            <p>Free shipping for standard order over $100 </p>
            <ul>
              <li>
                <Link>Help & FAQs</Link>
              </li>
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                <Link>EN</Link>
              </li>
              <li>
                <Link>USD</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <SideShoppingCart
        showShopCart={showShopCart}
        closeCart={() => setShowShopCart(!showShopCart)}
      />
    </>
  );
};

export default Navbar;
