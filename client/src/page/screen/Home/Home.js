import React from "react";
import { CategoryProduct } from "../../../components/Category/CategoryProduct";
import { HomeSkeleton } from "../../../components/HomeSkeleton/HomeSkeleton";
import { NavHome } from "../../../components/NavHome/NavHome";
import { SwiperSlider } from "../../../components/Swiper/Swiper";
import { useGetRanCategoryQuery } from "../../../service/categoryService";
import { HomeProduct } from "../HomeProduct/HomeProduct";

export const Home = () => {
  const { data, isFetching } = useGetRanCategoryQuery();
  console.log(">>>>>>>>>>>>category:", data)
  return (
    <div>
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
      {!isFetching ? (
        data.caterories.length > 0 &&
        data?.caterories?.map((category, index) => (
          <div className="my-bigcontainer px-5 mt-[30px]">
            <HomeProduct category={category} key={category._id}></HomeProduct>
          </div>
        ))
      ) : (
        <div className="my-container px-5">
          <HomeSkeleton></HomeSkeleton>
        </div>
        )}
    </div>
  );
};
