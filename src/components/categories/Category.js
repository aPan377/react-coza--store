import React from "react";

const Category = ({ name, description, imgSource }) => {
  return (
    <article className="category--container">
      <img src={imgSource} alt="category image" />
      <div className="category--text">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className="category--link">Shop Now</div>
    </article>
  );
};

export default Category;
