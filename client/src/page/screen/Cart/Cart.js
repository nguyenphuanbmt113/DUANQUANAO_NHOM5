import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavHome } from "../../../components/NavHome/NavHome";
import currencyFormatter from "currency-formatter";
import { discount } from "../../../ulties/discount";
import Quantity from "../../../components/Quatity/Quatity";
import { deleteCartItem } from "../../../redux/reducers/cartReducer";
export const Cart = () => {
  const { cart, totalMoney } = useSelector((state) => state.cartReducer);
  console.log("totalMoney:", totalMoney);
  console.log("cart:", cart);
  const dispatch = useDispatch();
  const inc = () => {};
  const dec = () => {};
  const handleDeleteCartItem = (id) => {
    const cart = localStorage.getItem("cart");
    const checkExists = JSON.parse(cart).find((item) => item._id !== id);
    console.log("checkExists:", checkExists);
    if (checkExists) {
      const newCart = JSON.parse(cart).filter((item) => item._id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch(deleteCartItem(id));
    }
  };
  return (
    <>
      <div>
        <NavHome></NavHome>
      </div>
      <div className="h-screen bg-gray-100 pt-10">
        <div className="my-container justify-center px-5 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart &&
              cart.length > 0 &&
              cart.map((item) => {
                const total = currencyFormatter.format(
                  discount(item.price, item.discount) * item.quantity,
                  {
                    code: "USD",
                  }
                );
                return (
                  <div
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    key={item._id}>
                    <img
                      src={`/images/${item.image1}`}
                      alt="product"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          {item.size}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <Quantity
                            quantity={item.quantity}
                            inc={() => inc()}
                            dec={dec}></Quantity>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">{total}</p>
                          <div onClick={() => handleDeleteCartItem(item._id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="text-gray-700 font-bold">Thanh Toán</div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Tổng Cộng</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  {currencyFormatter.format(totalMoney, {
                    code: "USD",
                  })}
                </p>
                <p className="text-sm text-gray-700">bao gồm VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};