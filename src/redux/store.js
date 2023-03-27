import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    order: orderSlice,
  },
});

export default store;
