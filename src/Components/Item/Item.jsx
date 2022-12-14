import React, { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { NavLink, useParams } from "react-router-dom";
import Product from "../../Service/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Item.css";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";

export default function Item() {
  const { productId } = useParams();
  console.log(productId, "id");
  const thisProduct = Product.find((prod) => prod.id === productId);
  const [showModal, setShowModal] = useState(false);
  SwiperCore.use([Autoplay]);

  return (
    <div className=" pt-10">
      <div
        className="flex items-center justify-center lg:justify-evenly flex-wrap mx-auto"
        style={{ width: "85%" }}
      >
        <div className="w-full md:w-6/12 mx-auto">
          <h2 className="font-bold text-2xl mb-5">
            {" "}
            Title :{" "}
            <span className="font-light text-xl">{thisProduct.title}</span>{" "}
          </h2>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-topcolor dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6 text-white">
                    Product name
                  </th>
                  <th scope="col" className="py-3 px-6 text-white">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {thisProduct.width ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Width
                    </th>
                    <td className="py-4 px-6 text-black ">
                      {thisProduct.width ? thisProduct.width + " sm" : "-"}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                {thisProduct.height ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Height
                    </th>
                    <td className="py-4 px-6 text-black">
                      {thisProduct.height ? thisProduct.height + " sm" : "-"}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                {thisProduct.Length ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Length
                    </th>
                    <td className="py-4 px-6 text-black">
                      {thisProduct.length ? thisProduct.length + " sm" : "-"}
                    </td>
                  </tr>
                ) : (
                  ""
                )}

                {thisProduct.Diameter ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Diameter
                    </th>
                    <td className="py-4 px-6 text-black">
                      {thisProduct.Diameter} cm
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                {thisProduct.WithCover ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      WithCover
                    </th>
                    <td className="py-4 px-6 text-black">
                      {thisProduct.WithCover}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                {thisProduct.Note ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Note
                    </th>
                    <td className="py-4 px-6 text-black">{thisProduct.Note}</td>
                  </tr>
                ) : (
                  ""
                )}
                {thisProduct.AvailableColors ? (
                  <tr className="bg-finalcolor border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-black whitespace-nowrap"
                    >
                      Available Colors
                    </th>
                    <td className="py-4 px-6 text-black">
                      {thisProduct.AvailableColors}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
          {thisProduct.offer ? (
            <div className="flex w-full justify-center px-2 my-5">
              <h2 className="text-xl font-semibold pr-10">
                Price :{" "}
                <span className="text-red-600 line-through text-xl font-light">
                  {thisProduct.price} LE
                </span>
              </h2>
              <h3 className="text-xl">
                {thisProduct.price - thisProduct.offer} LE
              </h3>
            </div>
          ) : (
            <div>
              <h2 className="text-gray-600 font-bold inline-block mt-5 text-2xl">
                Price
              </h2>
              <button
                type="button"
                className="cursor-default bg-gradient-to-r from-red-800 to-gray-300 text-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-1.5 ml-5 mb-2"
              >
                {thisProduct.price} LE
              </button>
            </div>
          )}
        </div>
        <button onClick={() => setShowModal(true)} className="relative">
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
              position: "relative",
            }}
          />
          {thisProduct.offer ? (
            <div className="bg-red-600 rounded-full absolute w-16 top-1.5 right-2 flex justify-center items-center offer">
              <p className="text-white my-4">Offer</p>
            </div>
          ) : (
            ""
          )}
        </button>
        <div>
          {showModal ? (
            <>
              <div className=" z-50 fixed flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white py-12 px-4 sm:px-6 lg:px-3 w-11/12 md:w-2/4 lg:w-3/12">
                <div className="border-0 rounded-lg items-start justify-center relative flex w-full bg-white outline-none focus:outline-none">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="Swiper"
                  >
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
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mt-18 mb-10">
        <h2
          className="text-left font-bold text-4xl text-gray-600 mb-5 mx-auto"
          style={{ width: "85%" }}
        >
          SIMILAR Products
        </h2>
        <div className="mt-7 swipe h-96 flex items-center	">
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
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            className="similar mx-auto"
            style={{ width: "85%" }}
          >
            {Product.map((ele, index) => {
              return ele.category === thisProduct.category ? (
                <SwiperSlide className="relative" key={index}>
                  <NavLink to={`/item/${ele.id}`}>
                    <img src={ele.img} alt="" className="w-96 h-60 hoverimg" />
                  </NavLink>
                  {ele.offer ? (
                    <div className="bg-red-600 rounded-full absolute w-12 top-1.5 right-1.5 flex justify-center items-center">
                      <p className="text-white my-2.5">Offer</p>
                    </div>
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              ) : (
                ""
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
