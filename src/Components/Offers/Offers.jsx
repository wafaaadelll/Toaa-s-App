import React from "react";
import { NavLink } from "react-router-dom";
import Product from "../../Service/Product";
import "./Offers.css";

export default function Offers() {
  return (
    <div style={{ width: "85%" }} className="mx-auto">
      <h1 className="underline italic text-4xl mt-5 font-semibold text-topcolor text-left">
        OFFERS
      </h1>
      <section className="w-4/5 mx-auto mt-7 lg:gap-2 lg:grid lg:grid-cols-4">
        {Product.map((item, index) => {
          return item.offer ? (
            <div className="border-2 shadow-2xl relative" key={index}>
              <div className="img-wrapper">
                <NavLink to={`/Item/${item.id}`}>
                  <img
                    src={item.img}
                    alt="offer"
                    className="offerimg hover-zoom"
                  />
                </NavLink>
              </div>
              <div className="bg-red-600 rounded-full absolute w-12 top-1.5 right-1.5 flex justify-center items-center offer">
                <p className="text-white my-2.5">Offer</p>
              </div>
              <div className="flex w-full justify-between px-2">
                <h2 className="text-xl font-semibold">
                  Price :{" "}
                  <span className="text-red-600 line-through text-xl font-light">
                    {item.price} LE
                  </span>
                </h2>
                <h3 className="text-xl">{item.price - item.offer} LE</h3>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </section>
    </div>
  );
}
