import { createSlice } from "@reduxjs/toolkit";

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState: [
    { category: "all products" },
    { category: "women" },
    { category: "men" },
    { category: "bag" },
    { category: "shoes" },
    { category: "watches" },
  ],
  reducers: {},
});

export default productCategoriesSlice.reducer;
