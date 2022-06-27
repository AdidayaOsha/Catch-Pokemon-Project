import React from "react";

function pagination({ currentPage, prevPage, nextPage, maxPage }) {
  return (
    <div className="flex flex-row justify-start items-center space-x-2 mb-10">
      <button
        onClick={prevPage}
        className={
          currentPage === 1
            ? "btn btn-black btn-sm btn-disabled"
            : "btn btn-black btn-sm"
        }
      >
        {"<"}
      </button>
      <div className="text-center">
        Page {currentPage} of {maxPage}
      </div>
      <button
        onClick={nextPage}
        className={
          currentPage === maxPage
            ? "btn btn-black btn-sm btn-disabled"
            : "btn btn-black btn-sm"
        }
      >
        {">"}
      </button>
    </div>
  );
}

export default pagination;
