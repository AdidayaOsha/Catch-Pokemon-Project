import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function MainHeader() {
  // const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <header className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="relative hidden sm:block">
            <label className="sr-only" htmlFor="search">
              {" "}
              Search{" "}
            </label>

            <input
              onChange={(e) =>
                dispatch({
                  type: "SEARCH POKEMON",
                  payload: e.target.value,
                })
              }
              className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-lg shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Find Pokemon!"
            />

            <button
              className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-md hover:text-gray-700 bg-gray-50 top-1/2 right-1"
              type="button"
              aria-label="Submit Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between flex-1 gap-8 sm:justify-end">
            <div className="flex gap-4">
              <button
                type="button"
                className="block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center">
                <Link
                  to={"/mypokemonlist"}
                  className="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <h1 className="italic flex text-center items-center">
                    My Pokemon List
                  </h1>
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="flex items-center transition rounded-lg group shrink-0 pointer-events-none"
            >
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://www.hyperui.dev/photos/man-4.jpeg"
                alt="Simon Lewis"
              />

              <p className="hidden ml-2 text-xs text-left sm:block">
                <strong className="block font-medium">Welcome, Trainer!</strong>

                <span className="text-gray-500"> Osha Prima Adidaya </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
