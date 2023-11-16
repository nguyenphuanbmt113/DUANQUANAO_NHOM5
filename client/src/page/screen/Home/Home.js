import React from "react";
import { CategoryProduct } from "../../../components/Category/CategoryProduct";
import { Footer } from "../../../components/Footer/Footer";
import { HomeSkeleton } from "../../../components/HomeSkeleton/HomeSkeleton";
import { NavHome } from "../../../components/NavHome/NavHome";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import { SwiperSlider } from "../../../components/Swiper/Swiper";
import { useGetRanCategoryQuery } from "../../../service/categoryService";
import { HomeProduct } from "../HomeProduct/HomeProduct";

export const Home = () => {
    const { data, isFetching } = useGetRanCategoryQuery();

    return (
        <div className="relative">
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
                    <div
                        className="my-bigcontainer px-5 mt-[30px]"
                        key={category._id}
                    >
                        <HomeProduct
                            category={category}
                            homepage={true}
                        ></HomeProduct>
                    </div>
                ))
            ) : (
                <div className="my-container px-5">
                    <HomeSkeleton></HomeSkeleton>
                </div>
            )}
            <div className="bg-white p-6 mt-10">
                <div className="max-w-[1340px] mx-auto grid sm:grid-cols-1 md:grid-cols-2">
                    <div className="h-[450px] sm:order-2 md:order-1">
                        <img
                            src={`/images/map.png`}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="container mx-auto sm:mb-7 sm:order-1 md:order-2">
                        <section className="text-center text-gray-800">
                            <div className="max-w-[700px] mx-auto px-3 lg:px-6">
                                <h2 className="text-3xl font-bold mb-5 text-blue-500">
                                    Liên hệ với chúng tôi
                                </h2>
                                <form>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput7"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="email"
                                            className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput8"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <textarea
                                            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                                            id="exampleFormControlTextarea13"
                                            rows="7"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="
              w-full
              px-6
              py-4
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
                                    >
                                        Gửi phản hồi
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};
