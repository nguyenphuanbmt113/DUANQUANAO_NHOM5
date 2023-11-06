import React, { useState } from "react";
import currencyFormatter from "currency-formatter";
import { DetailImage } from "./DetailImage";
import { ProductLoader } from "./ProductLoader";
import Quantity from "../Quatity/Quatity";
export const DetailProductCard = ({ product, isLoading }) => {
  console.log("isLoading:", isLoading);
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  const [quantity, setQuantity] = useState(1);
  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
    {isLoading ? (
      <ProductLoader></ProductLoader>
    ) : (
      <div className="flex flex-wrap">
        <div className="md:px-5 md:-mx-5 md:w-[40%] sm:w-full">
          <DetailImage product={product}></DetailImage>
          </div>
          <div className="w-full md:w-[60%] md:px-5 md:mx-5 sm:w-full">
            <div className="pb-4">
              <span className="mt-3 text-2xl font-medium capitalize text-gray-500 mb-1 lett font-serif">
                {product.title}
              </span>
              <div className="flex items-center gap-5">
                <span className="text-xl font-bold mt-2 font-nomal">
                  {currencyFormatter.format(discountPrice, { code: "USD" })}
                </span>
                <span className="mt-2 text-sm font-nomal line-through font-medium">
                  {currencyFormatter.format(product.price, { code: "USD" })}
                </span>
              </div>
            </div>
            {product?.sizes?.length > 0 && (
              <div className="flex items-center gap-3 py-4 border-y border-gray-300">
                <h3 className="w-[10%] mt-3 text-xl font-medium capitalize text-gray-600 mb-1 underline font-serif">
                  sizes
                </h3>
                <div className="flex flex-wrap -mx-1">
                  {product.sizes.map((size) => (
                    <div
                      className={`px-3 py-2 m-1 border border-gray-300 rounded cursor-pointer `}
                      key={size.name}>
                      <span className={`text-sm font-semibold uppercase`}>
                        {size.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product?.colors?.length > 0 && (
              <div className="flex items-center gap-5  py-4 border-b border-gray-300">
                <h3 className="w-[10%] mt-3 text-xl font-medium capitalize text-gray-600 mb-1 underline font-serif">
                  colors
                </h3>
                <div className="flex flex-wrap -mx-1">
                  {product.colors.map((color) => (
                    <div
                      key={color.color}
                      className="border border-gray-300 m-1 rounded-full cursor-pointer">
                      <span
                        className="min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: color.color }}></span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex -mx-3 items-center">
              <div className="w-full sm:w-6/12 p-3">
                <Quantity quantity={quantity} inc={inc} dec={dec} />
              </div>
              <div className="w-full sm:w-6/12 p-3">
                <button className="px-3 py-2 bg-indigo-400 text-white">
                  Add To Cart
                </button>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
          </div>
      )}
    </>
  );
};