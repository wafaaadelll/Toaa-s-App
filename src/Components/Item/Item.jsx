import React, { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import Product from "../../Service/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import './Item.css'
import "swiper/css";
import "swiper/css/navigation";

import { Navigation , Pagination} from "swiper";

export default function Item() {
  const { productId } = useParams();
  const thisProduct = Product.find((prod) => prod.id === productId);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" pt-40" >
      <div
      className="flex items-center justify-between flex-wrap mx-auto"style={{ width: "85%" }}
      
    >
      <div className="w-6/12 mx-auto">
        <h2 className="font-bold text-2xl mb-5"> Title : <span className="font-light text-xl">{thisProduct.title}</span> </h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Width
                </th>
                <td class="py-4 px-6">{thisProduct.width? thisProduct.width + " sm" : "-"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Height
                </th>
                <td class="py-4 px-6">{thisProduct.height? thisProduct.height + " sm" : "-"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Length
                </th>
                <td class="py-4 px-6">{thisProduct.length? thisProduct.length + " sm" : "-"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Diameter
                </th>
                <td class="py-4 px-6">{thisProduct.Diameter? thisProduct.Diameter + " sm" : "-"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  WithCover
                </th>
                <td class="py-4 px-6">{thisProduct.WithCover? thisProduct.WithCover : "No"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Note
                </th>
                <td class="py-4 px-6">{thisProduct.Note? thisProduct.Note :"-"}</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Available Colors
                </th>
                <td class="py-4 px-6">{thisProduct.AvailableColors? thisProduct.AvailableColors : "-"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold inline-block mt-5 text-2xl">
            Price
          </h2>
          <button
            type="button"
            class="cursor-default bg-gradient-to-r from-red-600 to-gray-300 text-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm px-4 py-1.5 ml-5 mb-2"
          >
            {thisProduct.price} LE
          </button>
        </div>
      </div>
      <button onClick={() => setShowModal(true)}>
        <Carousel
          data={thisProduct.thumbnail}
          width="350px"
          height="400px"
          radius="10px"
          thumbnails={true}
          thumbnailWidth="50px"
          showNavBtn={true}
          style={{
            textAlign: "center",
            maxWidth: "100%",
            margin: "auto",
            position: "relative"
          }}
        />
      </button>
      <div>
        {showModal ? (
          <>
           <div className=" z-50 fixed flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white py-12 px-4 sm:px-6 lg:px-3 w-3/12">
            <div
                className="border-0 rounded-lg items-start justify-center relative flex w-full bg-white outline-none focus:outline-none">
                <Swiper navigation={true} modules={[Navigation]} className="Swiper">
                    {thisProduct.thumbnail.map((img) => {
                    return (
                    <SwiperSlide>
                        <img src={img.image} />
                    </SwiperSlide>
                    );
                    })}
                </Swiper>
            </div>
          </div>
            <div
            onClick={() => setShowModal(false)}
            className="opacity-25 fixed inset-0 z-40 bg-black"
            ></div>
          </>
        ) : ("")}
      </div>
    </div>
      <div className="mt-18 mb-10">
        <h2 className="text-left font-bold text-4xl text-gray-600 mb-5 mx-auto" style={{"width":"85%"}}>SIMILAR Products</h2>
        <div className="mt-7 swipe h-96 flex items-center	">
              <Swiper
        slidesPerView={5}
          loop={true}
          spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay    = {{
          delay               : 1500,
          disableOnInteraction: false,
        }}
            className="similar mx-auto"
            style={{"width":"85%"}}
        >
          {Product.map((ele) => {
            return (
              ele.category === thisProduct.category ? 
                  <SwiperSlide><img src={ele.img} alt="" className="w-96 h-60" /></SwiperSlide> : "")
          })}
          </Swiper>
          </div>
            </div>
    </div>
  );
}
