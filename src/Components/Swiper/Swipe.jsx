import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipe.css";
import SwiperCore,{ Navigation , Autoplay , Pagination } from "swiper";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Swipe() {
  SwiperCore.use([Autoplay]);
  AOS.init()
  return (
    <div className="mt-7 swipe h-96 flex items-center	" data-aos="fade-up" data-aos-delay="500"
    data-aos-duration="2000">
        <Swiper
        slidesPerView={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay    = {{
          delay               : 1500,
          disableOnInteraction: false,
        }}
        className="mySwipe mx-auto"
        style={{"width":"85%"}}
      >
        <SwiperSlide><img src="images/s1.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s2.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s3.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s4.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s1.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s2.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s3.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s4.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s1.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s2.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s3.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
        <SwiperSlide><img src="images/s4.jfif" alt="" className="w-96 h-60" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
