import React, { useState } from "react";
import Product from "../../Service/Product";
import "./Categories.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";

export default function Categories({ naming }) {
  AOS.init();
  return (
    <div
      style={{ width: "85%" }}
      className="mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <h2 className="text-left font-bold text-3xl text-gray-600 my-5 underline">
        {naming}
      </h2>
      <div>
        <Swiper
          slidesPerView={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwipe mx-auto"
        >
          {Product.map((ele, index) => {
            return ele.category === naming ? (
              <div key={index}>
                <SwiperSlide>
                  <NavLink to={`/item/${ele.id}`}>
                    <img src={ele.img} alt="" className="w-96 h-60 hoverimg" />
                  </NavLink>
                </SwiperSlide>
              </div>
            ) : (
              ""
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
