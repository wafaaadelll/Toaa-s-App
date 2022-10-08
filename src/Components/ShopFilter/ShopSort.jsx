import React from "react";

export default function ShopSort({
  LowToHigh,
  HighToLow,
  smallToLarge,
  largeToSmall,
}) {
  return (
    <div>
      <ul>
        <li
          className="text-gray-900 block px-2 py-2 text-sm"
          onClick={() => LowToHigh()}
        >
          {" "}
          <span className="font-medium "> Price :</span> From Low To High{" "}
        </li>
        <li
          className="text-gray-900 block px-2 py-2 text-sm"
          onClick={() => HighToLow()}
        >
          {" "}
          <span className="font-medium "> Price :</span> From High To Low{" "}
        </li>
        <li
          className="text-gray-900 block px-2 py-2 text-sm"
          onClick={() => smallToLarge()}
        >
          {" "}
          <span className="font-medium "> Size :</span> From Small To Large{" "}
        </li>
        <li
          className="text-gray-900 block px-2 py-2 text-sm"
          onClick={() => largeToSmall()}
        >
          {" "}
          <span className="font-medium "> Size :</span> From Large To Small{" "}
        </li>
      </ul>
    </div>
  );
}
