import React from "react";

export const DetailImage = ({ product }) => {
  return (
    <>
      <div className="flex gap-3 flex-col">
        <div className="h-[450px] w-full]">
          <img
            src={`/images/${product.image1}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-[100px] w-full">
            <img
              src={`/images/${product.image2}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[100px] w-full">
            <img
              src={`/images/${product.image3}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};