import React from "react";
import { useGetRanCategoryQuery } from "../../service/categoryService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
export const SwiperSlider = () => {
  const { data, isFetching } = useGetRanCategoryQuery();
  console.log("data:", data);
  // return <div></div>;
  return isFetching ? (
    <div className="my-container h-[70vh] flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      {data?.caterories.length > 0 &&
        data?.caterories.map((cat, index) => (
          <SwiperSlide className="slide" key={cat._id}>
            <div className={`slide-img`}>
              <img
                src={`./images/slider/${index + 1}.jpg`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/40">
              <div className="justify-start max-w-[1240px] mx-auto p-5 mt-7">
                <span className="flex-none text-white capitalize font-v2 border inline-block px-3 py-2">
                  {cat.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
