import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToastError from "../toast/toast-error";
import ToastSuccess from "../toast/toast-success";

function ButtonUltraball({ data }) {
  const [isCatching, setIsCatching] = useState(false);
  const [maxStorage, setMaxStorage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function checkStorage() {
      const storage = [];
      for (let i = 1; i <= 6; i++) {
        if (localStorage.getItem(`pokemon${i}`)) {
          storage.push(`${i}`);
        }
      }
      setMaxStorage(storage);
    }
    checkStorage();
  }, []);

  async function handler(e) {
    try {
      e.preventDefault();
      setIsCatching(true);
      setTimeout(() => {
        const num = Math.ceil(Math.random() * 2);
        const ultraNum = Math.ceil(Math.random() * 10);
        const escNum = Math.random();

        if (escNum < 0.3) {
          ToastError("The Pokemon Fled!");
          navigate("/");
        } else if (num === 2 && escNum > 0.3) {
          ToastError("Failed To Capture the Pokemon, Try Again!");
          document.getElementById("my-modal-6").click();
        } else if (ultraNum > 3 && escNum > 0.3 && maxStorage.length < 6) {
          for (let i = 1; i <= 6; i++) {
            if (!localStorage.getItem(`pokemon${i}`)) {
              localStorage.setItem(`pokemon${i}`, `${data.name}`);
              document.getElementById("my-modal-4").click();
              break;
            }
          }
          navigate("/mypokemonlist");
          ToastSuccess(`${data.name.toUpperCase()} CAPTURED!!!`);
        } else if (maxStorage.length === 6) {
          navigate("/mypokemonlist");
          ToastError(
            "Pokemon Storage full, release 1 or more Pokémon to be able to catch again."
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
        htmlFor="my-modal-6"
        className="modal-button z-20 block p-1 text-blue-700 transition-all bg-yellow-200 border-2 border-white rounded-full active:bg-blue-50 hover:scale-150 focus:outline-none focus:ring"
      >
        <img
          src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon4.png"
          alt=""
          className="w-10 h-10 hover:animate-bounce"
        />
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <label htmlFor="my-modal-6" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <h1 className="text-lg font-bold">
              You're gonna catch{" "}
              <span className="font-bold uppercase text-red-400">
                {data.name}
              </span>{" "}
              with an Ultra Ball
            </h1>
            <h1 className="uppercase">
              This ball has <span className="font-bold">70%</span> catch chance
              rate.
            </h1>
            <p className=" py-4">Notes: Pokemon may also flee...</p>

            <h3 className="text-lg font-bold">Throw the Ultra Ball?</h3>
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

export default ButtonUltraball;
