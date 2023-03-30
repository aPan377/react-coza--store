import Product from "./Product";
import Spinner from "../spinner/Spinner";
import Search from "./Search";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";

const Products = () => {
  const prodCategories = useSelector((state) => state.productCategories);
  const products = useSelector((state) => state.products);

  const [searchParams, setSearchParams] = useSearchParams();
  const [productsList, setProductsList] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const searchRef = useRef("");
  const [searchVisibility, setSearchVisibility] = useState(false);

  function clearSearch() {
    searchParams.delete("search");
    setSearchParams(searchParams);
    setProductsList(products);
  }

  useEffect(() => {
    if (searchParams.get("search") === "") {
      clearSearch();
    } else if (searchParams.get("search")) {
      setProductsList(
        products.filter((item) =>
          item.title
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        )
      );
    }
  }, [searchParams.get("search")]);

  useEffect(() => {
    setIsLoading(true);
    if (
      searchParams.get("category") &&
      searchParams.get("category") !== "all products"
    ) {
      setProductsList(
        products.filter((item) =>
          item.category.includes(searchParams.get("category"))
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
  }, [searchParams.get("category")]);

  return (
    <main className="products--container">
      <h2>product overview</h2>
      <section className="products--category">
        <article className="category--text">
          <ul className="category--text--list">
            {prodCategories.map((item, index) => (
              <li
                key={index}
                onClick={() => setSearchParams({ category: item.category })}
              >
                {item.category[0].toUpperCase() + item.category.slice(1)}
              </li>
            ))}
          </ul>
        </article>
        <article className="category--buttons">
          <div
            className="category--buttons--search"
            onClick={() => setSearchVisibility(!searchVisibility)}
          >
            <Search />
          </div>
          <div
            className="category--buttons--input"
            aria-expanded={searchVisibility}
          >
            <SearchInput ref={searchRef} clear={() => clearSearch()} />
          </div>
        </article>
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
