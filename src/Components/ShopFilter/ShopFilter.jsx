import React from "react";
import { Link } from "react-router-dom";
import Product from "../../Service/Product";
import "./Filter.css";

export default function ShopFilter({ item }) {
  return (
    <div className="lg:col-span-3">
      {/* Replace with your content */}
      {/* <h2 id="products-heading" className='text-5xl text-gray-500 pb-5'>
                    Products
                </h2> */}
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full">
        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mt-5">
          {item.map((product, index) => {
            return (
              <div
                className="w-full rounded hover:shadow-2xl text-left containe relative"
                key={index}
              >
                <div className="containe h-60">
                  <img src={product.img} alt="image" className="image" />
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
                    {product.price} $
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
      </div>
      {/* /End replace */}
    </div>
  );
}
