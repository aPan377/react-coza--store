import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/icons/logo-01.png";

import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import Slider from "./slider/Slider";

const Navbar = () => {
  return (
    <header className="nav--container">
      <div className="nav--mobile">
        {/* left logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* right icons */}
        <div className="mobile--rightIcons">
          <div>
            <BiSearch />
          </div>
          <div>
            <FiShoppingCart />
          </div>
          <div>
            <AiOutlineHeart />
          </div>
          <div>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div className="nav--primary">
        {/* desktop navbar block*/}
        <div className="desktop--navbar--block desktop--logo">
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
        <div className="desktop--navbar--block desktop--icons">
          <div>
            <BiSearch />
          </div>
          <div>
            <FiShoppingCart />
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
      <Slider />
    </header>
  );
};

export default Navbar;
