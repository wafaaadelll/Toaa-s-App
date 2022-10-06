import React from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

export default function ShopFilter({ item }) {
  return (
    <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mt-5">
      {item.map((product) => {
        return (
          <div class="w-full rounded hover:shadow-2xl text-left containe">
            <div className="containe h-60">
              <img src={product.img} alt="image" className="image" />
              <div class="overlay">
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
                class="bg-gradient-to-r from-red-600 to-gray-300 text-gray-50 hover:bg-gradient-to-l hover:from-red-600 hover:to-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2"
              >
                {product.price} LE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
