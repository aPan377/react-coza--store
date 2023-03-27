import { createSlice } from "@reduxjs/toolkit";

const order = JSON.parse(localStorage.getItem("order"));

const orderSlice = createSlice({
  name: "order",
  initialState: () => {
    return JSON.parse(localStorage.getItem("order")) || [];
  },
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const newState = state.filter((product) => product.id != action.payload);

      const orderListLocalStorage = JSON.parse(localStorage.getItem("order"));
      const newOrderListLocalStorage = JSON.stringify(
        orderListLocalStorage.filter((product) => product.id != action.payload)
      );
      localStorage.setItem("order", newOrderListLocalStorage);
      return [...newState];
    },
  },
});

export const { addProduct, deleteProduct } = orderSlice.actions;

export default orderSlice.reducer;
