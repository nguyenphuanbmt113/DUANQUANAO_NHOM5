import React from "react";
import currencyFormatter from "currency-formatter";
export const DetailProductCard = ({ product }) => {
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  return (
    <div className="flex flex-wrap">
      <div className="px-5 -mx-5 md:w-[40%] sm:w-full border border-blue-400">
        <div className="flex gap-3 flex-col">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/7434.jpg"
            alt=""
            className=""
          />
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://4kwallpapers.com/images/walls/thumbs_2t/5534.png"
              alt=""
              className=""
            />
            <img
              src="https://4kwallpapers.com/images/walls/thumbs_2t/9309.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
      <div className="px-5 mx-5 md:w-[60%] sm:w-full border border-red-400">
        <div className="pb-4">
          <span className="mt-3 text-2xl font-medium capitalize text-gray-500 mb-1 lett font-serif">
            {product.title}
          </span>
          <div className="flex items-center gap-5">
            <span className="text-xl font-bold mt-2 font-nomal font-medium">
              {currencyFormatter.format(discountPrice, { code: "USD" })}
            </span>
            <span className="mt-2 text-sm font-nomal line-through font-medium">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
          </div>
        </div>
        {product?.sizes?.length > 0 && (
          <div className="pb-4 border-y border-gray-300">
            <h3 className="mt-3 text-xl font-medium capitalize text-gray-600 mb-1 underline font-serif">
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
          <div className="pb-4 border-b border-gray-300">
            <h3 className="mt-3 text-xl font-medium capitalize text-gray-600 mb-1 underline font-serif">
              colors
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.colors.map((color) => (
                <div
                  key={color.color}
                  className="border border-gray-300 m-1 rounded-full cursor-pointer">
                  <span
                    className="min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: color.color }}>
                    {/* {colorState === color.color && (
                      <BsCheck2 className="text-white" size={20} />
                    )} */}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};