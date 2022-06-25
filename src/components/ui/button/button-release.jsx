import React from "react";

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
        if (results === name) {
          localStorage.removeItem(`pokemon${i}`);
          break;
        }
      }
      document.getElementById("my-modal-3").click();
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
      <button
        onClick={release}
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

      <div>
        <label for="my-modal-3" class="btn modal-button btn-accent">
          Release
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
            <div>
              <button onClick={release} className="btn btn-accent">
                Release
              </button>
              <button onClick={onCancel} className="btn btn-error">
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
