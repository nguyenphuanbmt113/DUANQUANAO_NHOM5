import { createSlice } from "@reduxjs/toolkit";
const cart = localStorage.getItem("cart");
const initialState = {
  cart: cart ? JSON.parse(cart) : [],
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const checkItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (!checkItem) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart = [...state.cart];
      }
    },
  },
});
export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;