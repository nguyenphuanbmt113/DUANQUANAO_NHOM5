import React from "react";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
export const ProductCard = ({ pro }) => {
  const percentage = pro.discount / 100;
  const discountPrice = pro.price - pro.price * percentage;
  return (
    <>
      <Link to={`/product/${pro._id}`}>
        <div className="w-full" key={pro._id}>
          <div className="w-full">
            <img
              src={`/images/${pro.image1}`}
              alt=""
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="mt-3 text-lg font-nomal">{pro.title}</div>
          <div className="flex items-center justify-between">
            <div className="mt-2 text-sm font-nomal font-medium">
              {currencyFormatter.format(discountPrice, { code: "USD" })}
            </div>
            <div className="mt-3 text-sm font-nomal line-through font-medium">
              {currencyFormatter.format(pro.price, { code: "USD" })}
            </div>
          </div>
        </div>
        </Link>
    </>
  );
};