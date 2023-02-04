import React from "react";
import "../app.css";
import logo from "../../images/icons/logo-01.png";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="nav--container">
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
            Home
            {/* <ul>
              <li>Home 1</li>
              <li>Home 2</li>
              <li>Home 3</li>
            </ul> */}
          </li>
          <li>Shop</li>
          <li>
            Features<span className="hot">Hot</span>
          </li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
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
          <li>Help & FAQs</li>
          <li>My Account</li>
          <li>EN</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
