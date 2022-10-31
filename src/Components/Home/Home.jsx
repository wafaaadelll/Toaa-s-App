import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Products from "../Products/Products";
import AOS from "aos";
import Swipe from "../Swiper/Swipe";
import "aos/dist/aos.css";
import Categories from "../Categories/Categories";
import Product from "../../Service/Product";
import { NavLink } from "react-router-dom";

export default function Home() {
  AOS.init();
  const swipe = [
    {
      link: `${require("../Images/c6.jpg")}`,
    },
    {
      link: `${require("../Images/c7.jpg")}`,
    },
    {
      link: `${require("../Images/c8.jpg")}`,
    },
    {
      link: `${require("../Images/c5.jpg")}`,
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div className="mx-auto text-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        speed={700}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full"
      >
        {swipe.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img.link} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Categories naming={"Winter Clothes"} /> */}
      <div
        data-aos="fade-up"
        className="container space-y-2 grid-cols-1 md:grid-cols-2 lg:space-y-0 gap-10 grid lg:grid-cols-3 mt-5 mx-auto "
        style={{ width: "85%" }}
      >
        {Product.map((prod, index) => {
          return prod["New Arrival"] ? (
            <div className="w-full rounded hover:shadow-2xl" key={index}>
              <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                <a href="#">
                  <img
                    src={prod.img}
                    className="h-96 w-full text-center mx-auto group-hover:mix-blend-soft-light hover:opacity-70 hover:-translate-y-0.5 hover:-translate-x-0.5 ease-in-out duration-300 "
                  />
                </a>
                <div className="py-3 text-gray-50 bg-topcolor">
                  <p>{prod.title}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      {/* <Categories naming={"Hey Bags"} /> */}
      <div className="mx-auto text-center bg-color mt-7">
        <NavLink to={"/Offer"}>
          <img
            className="text-center mx-auto h-96 w-full"
            src="https://img.freepik.com/free-vector/offer-deals-banner-red-background_1017-27332.jpg?w=2000"
            alt=""
          />
        </NavLink>
      </div>
      {/* <Categories naming={"Macrame wall hanging"} /> */}
      <Products />
      {/* <Categories naming={"Boxes"} /> */}
      <Swipe />
    </div>
  );
}
