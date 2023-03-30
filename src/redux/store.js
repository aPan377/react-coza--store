import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import orderSlice from "./orderSlice";
import productCategoriesSlice from "./productCategoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    order: orderSlice,
    productCategories: productCategoriesSlice,
  },
});

export default store;
