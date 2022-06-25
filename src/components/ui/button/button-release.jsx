import React from "react";

function ButtonRelease() {
  return (
    <div>
      <button
        className="inline-block p-3 text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring"
        href="/download"
      >
        <span className="sr-only"> Download </span>

        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonRelease;
