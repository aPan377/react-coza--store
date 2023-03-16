import Product from "./Product";

import { BsFilterLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const Products = () => {
  const prodCategories = [
    "All Products",
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Watches",
  ];

  const products = useSelector((state) => state.products);

  return (
    <main className="products--container">
      <h2>product overview</h2>
      <section className="products--category">
        <article>
          <ul className="category--text--list">
            {prodCategories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </article>
        <div className="category--buttons">
          <div>
            <BsFilterLeft />
            <span>Filter</span>
          </div>
          <div>
            <CiSearch />
            <span>Search</span>
          </div>
        </div>
      </section>
      <section className="products--grid">
        {products.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>
      <section className="products--load--button">
        <div>
          <p>load more</p>
        </div>
      </section>
    </main>
  );
};

export default Products;
