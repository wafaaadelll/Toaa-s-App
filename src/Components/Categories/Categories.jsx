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
      <h2 className="text-left font-bold text-3xl text-finalcolor txtshadow my-5 mathfont">
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
              <div key={ele.id} className="relative">
                <SwiperSlide>
                  <NavLink to={`/item/${ele.id}`}>
                    <img src={ele.img} alt="" className="w-96 h-60 hoverimg" />
                  </NavLink>
                  {ele.offer ? (
                    <div className="bg-red-600 rounded-full absolute w-12 top-1.5 right-1.5 flex justify-center items-center offer">
                      <p className="text-white my-2.5">Offer</p>
                    </div>
                  ) : (
                    ""
                  )}
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
