import Product from "./Product";
import Spinner from "../spinner/Spinner";

import { CiSearch } from "react-icons/ci";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const prodCategories = useSelector((state) => state.productCategories);
  const products = useSelector((state) => state.products);

  const [categorySearchParams, setCategorySearchParams] = useSearchParams();
  const [productsList, setProductsList] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (
      categorySearchParams.get("category") &&
      categorySearchParams.get("category") !== "all products"
    ) {
      setProductsList(
        products.filter((item) =>
          item.category.includes(categorySearchParams.get("category"))
        )
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setProductsList(products);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [categorySearchParams]);

  return (
    <main className="products--container">
      <h2>product overview</h2>
      <section className="products--category">
        <article>
          <ul className="category--text--list">
            {prodCategories.map((item, index) => (
              <li key={index} onClick={() => setCategorySearchParams(item)}>
                {item.category[0].toUpperCase() + item.category.slice(1)}
              </li>
            ))}
          </ul>
        </article>
        <div className="category--buttons">
          <div>
            <CiSearch />
            <span>Search</span>
          </div>
        </div>
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <section className="products--grid">
            {productsList.map((product, index) => (
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
        </>
      )}
    </main>
  );
};

export default Products;
