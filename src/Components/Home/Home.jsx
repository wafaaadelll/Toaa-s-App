import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Offers from "../Offers/Offers";
import Products from "../Products/Products";
import AOS from "aos";
import Swipe from "../Swiper/Swipe";
import "aos/dist/aos.css";
import Categories from "../Categories/Categories";
import Product from "../../Service/Product";

export default function Home() {
  AOS.init();
  const swipe = [
    {
      link: "Images/s1.jfif",
    },
    {
      link: "Images/s2.jfif",
    },
    {
      link: "Images/s3.jfif",
    },
    {
      link: "Images/s4.jfif",
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
      <Categories naming={"Winter Clothes"} />
      <div
        data-aos="fade-up"
        className="container space-y-2 lg:space-y-0 lg:gap-10 lg:grid lg:grid-cols-3 mt-5 mx-auto "
        style={{ width: "85%" }}
      >
        {Product.map((prod, index) => {
          return prod.offer ? (
            <div className="w-full rounded hover:shadow-2xl" key={index}>
              <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                <a href="#">
                  <img
                    src={prod.img}
                    alt=""
                    className="h-96 w-full text-center mx-auto group-hover:mix-blend-soft-light hover:opacity-70 hover:-translate-y-0.5 hover:-translate-x-0.5 ease-in-out duration-300 "
                  />
                </a>
                <div className="p-5 text-gray-50 bg-red-600">
                  <p>{prod.title}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <Categories naming={"Hey Bags"} />
      <Offers />
      <Categories naming={"Macrame wall hanging"} />
      <Products />
      <Categories naming={"Boxes"} />
      <Swipe />
    </div>
  );
}
