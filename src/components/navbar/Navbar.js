import React from "react";

const Navbar = () => {
  return (
    <div className="nav--container">
      <div className="nav--mobile">
        <span>Logo</span>
        <div>
          <span>Search</span>
          <span>Shopping cart</span>
          <span>Likes</span>
          <span>Burger</span>
        </div>
      </div>
      <div className="nav--primary">
        <ul>
          <li>
            Home
            <ul>
              <li>Home 1</li>
              <li>Home 2</li>
              <li>Home 3</li>
            </ul>
          </li>
          <li>Shop</li>
          <li>Features</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav--secondary">
        <p>Free shipping for standard order over $100 </p>
        <u>
          <li>Help & FAQs</li>
          <li>My Account</li>
          <li>EN</li>
          <li>USD</li>
        </u>
      </div>
    </div>
  );
};

export default Navbar;
