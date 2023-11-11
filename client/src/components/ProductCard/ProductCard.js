import React from "react";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
export const ProductCard = ({ pro, homepage }) => {
  console.log("pro:", pro)
  const percentage = pro.discount / 100;
  const discountPrice = pro.price - pro.price * percentage;
  let result = 0;
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    total = 0;
  if (pro?.reviews?.length > 0) {
    pro?.reviews?.forEach((item) => {
      if (item.rating === 1) {
        one += 1;
      }
      if (item.rating === 2) {
        two += 1;
      }
      if (item.rating === 3) {
        three += 1;
      }
      if (item.rating === 4) {
        four += 1;
      }
      if (item.rating === 5) {
        five += 1;
      }
    });
    total = one + two + three + four + five;
    result = (1 * one + 2 * two + 3 * three + 4 * four + 5 * five) / total;
  } else {
    total = 0;
    result = 0;
  }
  const finalResult = parseFloat(result).toFixed(1);
  return (
    <div
    className={`${
      !homepage && "bg-white rounded-md p-5 border border-[#d2d2d2]"
    }`}>
      <Link to={`/product/${pro._id}`}>
        <div className="w-full" key={pro._id}>
          <div className="w-full">
            <img
              src={`/images/${pro.image1}`}
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="mt-3 text-lg font-nomal uppercase">{pro.title}</div>
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mb-1">
              <span>{finalResult}</span>
              <AiFillStar color="orange" />
              <span>({total})</span>
            </div>
          </div>
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
    </div>
  );
};