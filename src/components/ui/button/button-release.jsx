import React from "react";
import { toast } from "react-toastify";

function ButtonRelease({ name, setIsReleased }) {
  function releaseModal() {
    return (
      <div>
        <label for="my-modal-3" class="btn modal-button">
          open modal
        </label>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">
              Congratulations random Interner user!
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
    );
  }
  function release() {
    try {
      setTimeout(() => {
        setIsReleased(true);
      }, 500);
      for (let i = 1; i < 6; i++) {
        const results = localStorage.getItem(`pokemon${i}`);
        if (results.includes(name)) {
          localStorage.removeItem(`pokemon${i}`);
          break;
        }
      }
      document.getElementById("my-modal-3").click();
      toast.success("Pokemon has been released", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsReleased(false);
    } catch (err) {
      setIsReleased(false);
      console.log(err);
    }
  }

  function onCancel() {
    document.getElementById("my-modal-3").click();
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <label
            for="my-modal-3"
            class="btn modal-button btn-error text-white btn-sm animate-pulse"
          >
            Release
          </label>
        </div>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative flex flex-col m-auto items-center">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">Release Pokemon?</h3>
            <p class="py-4">You will be able to catch them again anytime.</p>
            <div className="space-x-2">
              <button
                onClick={release}
                className="btn btn-error btn-sm text-white"
              >
                Release
              </button>
              <button
                onClick={onCancel}
                className="btn btn-accent btn-sm text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonRelease;
