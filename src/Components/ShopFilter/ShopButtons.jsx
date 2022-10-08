import React, { useState } from "react";
import Product from "../../Service/Product";

export default function ShopButtons({ filterItem, setItem, menuItems }) {
  const buttons = [
    { name: "All Products" },
    { name: "Bags", filter: "Bags" },
    { name: "Boxes", filter: "Boxes" },
    { name: "Macrame wall hanging", filter: "Macrame wall hanging" },
    { name: "Hey Bags", filter: "Hey Bags" },
    { name: "Winter Clothes", filter: "Winter Clothes" },
  ];
  const [active, setActive] = useState(false);

  return (
    <ul
      role="list"
      className="space-y-4  pb-6 text-sm font-medium text-gray-900"
    >
      {buttons.map((Val, id) => {
        return Val.filter ? (
          <li
            key={id}
            onClick={() => {
              filterItem(Val.filter);
              setActive(id);
            }}
          >
            <a
              className={` ${
                active === id ? "select" : ""
              } text-gray-500 pb-2 mx-2 w-44 py-1 mb-5 cursor-pointer`}
            >
              {Val.name}
            </a>
          </li>
        ) : (
          <li
            onClick={() => {
              setItem(Product);
              setActive(id);
            }}
          >
            <a
              className={` ${
                active === id ? "select" : ""
              } text-gray-500 pb-2 mx-2 w-44 py-1 mb-5 cursor-pointer`}
            >
              All Products
            </a>
          </li>
        );
      })}
    </ul>
  );
}
