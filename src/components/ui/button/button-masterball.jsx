import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ButtonMasterball({ data, isCatching, setIsCatching }) {
  const pok1 = localStorage.getItem("pokemon1");
  const pok2 = localStorage.getItem("pokemon2");
  const pok3 = localStorage.getItem("pokemon3");
  const pok4 = localStorage.getItem("pokemon4");
  const pok5 = localStorage.getItem("pokemon5");
  const pok6 = localStorage.getItem("pokemon6");

  const navigate = useNavigate();

  async function handler(e) {
    try {
      e.preventDefault();
      setIsCatching(true);
      setTimeout(() => {
        if (!pok1) {
          localStorage.setItem("pokemon1", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (!pok2) {
          localStorage.setItem("pokemon2", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (!pok3) {
          localStorage.setItem("pokemon3", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (!pok4) {
          localStorage.setItem("pokemon4", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (!pok5) {
          localStorage.setItem("pokemon5", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (!pok6) {
          localStorage.setItem("pokemon6", `${data.name}`);
          document.getElementById("my-modal-3").click();
          navigate("/mypokemonlist");
          toast.success(`${data.name.toUpperCase()} CAPTURED!!!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log(
            `Your Pokemon Storage is full, release 1 or more Pokemons`
          );
        }
        setIsCatching(false);
      }, 3000);
    } catch (err) {
      setIsCatching(false);
      console.log(err);
    }
  }

  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="modal-button z-20 block p-1 text-blue-700 transition-all bg-purple-200 border-2 border-white rounded-full active:bg-blue-50 hover:scale-150 focus:outline-none focus:ring"
      >
        <img
          src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon5.png"
          alt=""
          className="w-10 h-10 hover:animate-bounce"
        />
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <h1 className="text-lg font-bold">
              You're gonna catch <span>{data.name}</span> with a MASTER BALL
            </h1>
            <h1 className="uppercase">
              This ball has a <span className="font-bold">100% GUARANTEED</span>{" "}
              chance of success
            </h1>
            <h3 className="text-lg font-bold">Throw the Master Ball?</h3>
          </div>

          {/* Button */}
          <div className="m-5">
            {isCatching ? (
              <div>
                <p className="animate-ping mx-32 mb-5 text-xs">Throwing....</p>
                <progress className="progress w-56"></progress>
              </div>
            ) : (
              <button
                onClick={handler}
                className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-black group-hover:w-full group-active:bg-indigo-500"></span>
                <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                  THROW!
                </span>
              </button>
            )}
          </div>
        </label>
      </label>
    </div>
  );
}

export default ButtonMasterball;
