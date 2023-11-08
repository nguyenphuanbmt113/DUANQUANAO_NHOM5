import React from "react";
import { useSelector } from "react-redux";
import { NavHome } from "../../../components/NavHome/NavHome";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  console.log("cart:", cart)
  return (
    <>
      <div>
        <NavHome></NavHome>
      </div>
      <div className="my-container px-5"></div>
    </>
  );
};