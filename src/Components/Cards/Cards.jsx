import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards({ item }) {
  return (
    <section>
      <div
        className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4 border-4 "
        style={{ height: "600px", overflowY: "scroll", overflowX: "hidden" }}
      >
        {item.map((product, index) => {
          return (
            <div
              className="w-full rounded hover:shadow-2xl bg-gray-100 text-left relative "
              key={index}
            >
              <div className="contain h-60">
                <img src={product.img} alt="image" className="img" />
                <div className="overlay">
                  <Link
                    to={`/Item/${product.id}`}
                    className="button text-white bg-gray-400 p-1 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"
                  >
                    Show Details
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <p className="text-gray-800 font-normal mt-2 mb-5">
                  {product.title}
                </p>
                <button
                  type="button"
                  className="bg-gradient-to-r from-red-800 to-gray-300 text-gray-50 hover:bg-gradient-to-l hover:from-red-800 hover:to-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2"
                >
                  {product.price} LE
                </button>
              </div>
              {product.offer ? (
                <div className="bg-red-600 rounded-full absolute w-12 top-1.5 right-1.5 flex justify-center items-center offer">
                  <p className="text-white my-2.5">Offer</p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
