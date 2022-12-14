import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipe.css";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "../../Service/Product";
import { Link, NavLink } from "react-router-dom";

export default function Swipe() {
  SwiperCore.use([Autoplay]);
  AOS.init();
  return (
    <div>
      <div
        className="mt-7 swipe h-96"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <h3
          className="font text-5xl text-left text-finalcolor pt-5 my-10 mx-auto"
          style={{ width: "85%" }}
        >
          New Arrivals
        </h3>
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          observer={true}
          observeParents={true}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwipe mx-auto"
          style={{ width: "85%" }}
        >
          {Product.map((prod, index) => {
            return prod.NewArrival ? (
              <SwiperSlide key={index}>
                <NavLink to={`/Item/${prod.id}`}>
                  <img src={prod.img} alt="" className="w-96 h-60" />
                </NavLink>
              </SwiperSlide>
            ) : (
              ""
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
