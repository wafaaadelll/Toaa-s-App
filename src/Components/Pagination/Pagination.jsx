import React, { useState } from "react";

export default function Pagination({
  tableRowsPerPage,
  totalData,
  paginateData,
}) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalData / tableRowsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [active, setActive] = useState(false);

  return (
    <div className="pagination">
      <ul className="mt-5">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              paginateData(page);
              setActive(index);
            }}
            className={`${
              active === index ? "selected" : ""
            } px-3 text-topcolor`}
          >
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
}
