import { createSlice } from "@reduxjs/toolkit";
const cart = localStorage.getItem("cart");
const cartData = cart ? JSON.parse(cart) : [];
function allItems(cartData) {
  let totalItems = 0;
  cartData.forEach((element) => {
    const totalQuantity = totalItems + element.quantity;
    totalItems = totalQuantity;
  });
  return totalItems;
}
function totalMoney(cartData) {
  let totalPrice = 0;
  cartData.forEach((element) => {
    const totalMoney =
      element.quantity *
      (element.price - (element.price * element.discount) / 100);
    totalPrice = totalMoney;
  });
  return totalPrice;
}
const initialState = {
  cart: cartData.length > 0 ? cartData : [],
  items: cartData.length > 0 ? allItems(cartData) : [],
  totalMoney: cartData.length > 0 ? totalMoney(cartData) : [],
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
    deleteCartItem: (state, action) => {
      const newCart = state.cart.filter((item) => item._id !== action.payload);
      if (newCart) {
        state.cart = newCart;
      }
    },
  },
});
export const { addtoCart, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;