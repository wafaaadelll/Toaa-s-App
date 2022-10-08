import React, { useState } from "react";
import Product from "../../Service/Product";
import "./Cards.css";

export default function Filter({ filterItem, setItem, menuItems }) {
  const [active, setActive] = useState(false);
  const buttons = [
    { name: "All Products" },
    { name: "Bags", filter: "Bags" },
    { name: "Boxes", filter: "Boxes" },
    { name: "Macrame wall hanging", filter: "Macrame wall hanging" },
    { name: "Hey Bags", filter: "Hey Bags" },
    { name: "Winter Clothes", filter: "Winter Clothes" },
  ];

  return (
    <section>
      <div className="d-flex justify-content-center w-3/4 mx-auto">
        {buttons.map((Val, id) => {
          return Val.filter ? (
            <button
              key={id}
              onClick={() => {
                filterItem(Val.filter);
                setActive(id);
              }}
            >
              <a
                className={` ${
                  active === id ? "selected" : ""
                } text-gray-500 pb-2 mx-2 w-44 py-1 mb-5 cursor-pointer`}
              >
                {Val.name}
              </a>
            </button>
          ) : (
            <button
              onClick={() => {
                setItem(Product);
                setActive(id);
              }}
            >
              <a
                className={` ${
                  active === id ? "selected" : ""
                } text-gray-500 pb-2 mx-2 w-44 py-1 mb-5 cursor-pointer `}
              >
                All Products
              </a>
            </button>
          );
        })}
      </div>
    </section>
  );
}
