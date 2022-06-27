import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function MainHeader() {
  const [timer, setTimer] = useState(null);

  function inputChanged(e) {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      dispatch({
        type: "SEARCH_POKEMON",
        payload: e.target.value,
      });
    }, 500);

    setTimer(newTimer);
  }

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
              onChange={inputChanged}
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
              <div className="flex flex-row">
                <Link
                  to={"/mypokemonlist"}
                  className="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                >
                  <div className="flex">
                    <div>
                      <img
                        src="https://i.pinimg.com/736x/50/0a/73/500a73fdf94ffc1c2c9cf7fd80ca51ae.jpg"
                        alt=""
                        className="w-10 h-10"
                      />
                    </div>

                    <div className="m-auto">
                      <h1 className="italic flex text-center items-center">
                        My Pokémon
                      </h1>
                    </div>
                  </div>
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
