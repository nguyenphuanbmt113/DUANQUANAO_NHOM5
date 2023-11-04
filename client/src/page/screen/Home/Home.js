import React from "react";
import { CategoryProduct } from "../../../components/Category/CategoryProduct";
import { NavHome } from "../../../components/NavHome/NavHome";
import { SwiperSlider } from "../../../components/Swiper/Swiper";

export const Home = () => {
  return (
    <div>
      <NavHome></NavHome>
      <div>
        <SwiperSlider></SwiperSlider>
      </div>
      <div className="">
        <div className="my-container px-5">
          <CategoryProduct></CategoryProduct>
        </div>
      </div>
    </div>
  );
};
