import React from "react";
import { useGetRanCategoryQuery } from "../../service/categoryService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Spinner } from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
export const SwiperSlider = () => {
  const { data, isFetching } = useGetRanCategoryQuery();
  const navigate = useNavigate();
  const handleRouteCate = (title) => {
    navigate(`/category-product/${title}`);
  };
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
          <SwiperSlide
            className="slide"
            key={cat._id}
            onClick={() => handleRouteCate(cat.title)}>
            <div className={`slide-img`}>
              <img
                src={`./images/slider/${index + 1}.jpg`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/40">
              <div className="flex justify-start max-w-[1240px] mx-auto p-5 mt-7">
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
