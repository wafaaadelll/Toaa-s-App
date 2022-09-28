import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import SwiperCore,{ Navigation , Autoplay } from "swiper";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
  } from "@material-tailwind/react";

export default function Home() {
    const swipe = [
        {
            link:"Images/s1.jfif"
        },
        {
            link:"Images/s2.jfif"
        },
        {
            link:"Images/s3.jfif"
        },
        {
            link:"Images/s4.jfif"
        }
    ]
    SwiperCore.use([Autoplay]);
    const products = [
        {
            img:"images/p1.jfif",
            title:"Product Name"
        },
        {
            img:"images/p2.jfif",
            title:"Product Name"
        },
        {
            img:"images/p3.jfif",
            title:"Product Name"
        }
    ]
  return (
    <div className="mx-auto text-center">
        <Swiper navigation  = {true}
        modules     = {[Navigation]}
        loop        = {true}
        speed       = {700}
        autoplay    = {{
            delay               : 1500,
            disableOnInteraction: false,
          }}
        className="mySwiper">
            {
                swipe.map((img)=>{
                    return(
                        <SwiperSlide>
                            <img src={img.link} alt="" className="" />
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>
      <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-10 lg:grid lg:grid-cols-3 mt-5 " style={{"width":"85%"}}>
        {
            products.map((product)=>{
                return(
                    <div class="w-full rounded hover:shadow-2xl">
                        <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                        <a href="#">
                            <img class="rounded-t-lg" src={product.img} alt="" className="h-96 w-full text-center mx-auto group-hover:mix-blend-soft-light hover:opacity-70 hover:-translate-y-0.5 hover:-translate-x-0.5 ease-in-out duration-300 " />
                        </a>
                            <div class="p-5 text-gray-50 bg-red-600">
                                <p>{product.title}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
