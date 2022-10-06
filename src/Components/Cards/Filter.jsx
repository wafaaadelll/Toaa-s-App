import React, { useState } from "react";
import Product from "../../Service/Product";
import "./Cards.css";

export default function Filter({ filterItem, setItem, menuItems }) {
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <div className="d-flex justify-content-center w-3/4 mx-auto">
        <button
          className={`border-b text-gray-500 border-gray-400 pb-2 mx-2 w-44 py-1 mb-5 `}
          onClick={() => {
            setItem(Product);
          }}
        >
          All Products
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className={` ${
                active === id ? "selected" : ""
              } text-gray-500 pb-2 mx-2 w-44 py-1 mb-5`}
              onClick={() => {
                filterItem(Val);
                setActive(id);
              }}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </section>
  );
}
