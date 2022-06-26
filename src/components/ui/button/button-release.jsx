import React from "react";

function ButtonRelease({ name }) {
  function release() {
    for (let i = 1; i <= 6; i++) {
      const results = localStorage.getItem(`pokemon${i}`);
      if (results === name) {
        localStorage.removeItem(`pokemon${i}`);
        break;
      }
    }
    document.getElementById(`my-modal-${name}`).click();
    window.location.reload();
  }

  function onCancel() {
    document.getElementById(`my-modal-${name}`).click();
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <label
            htmlFor={`my-modal-${name}`}
            class="btn modal-button btn-error text-white btn-sm animate-pulse"
          >
            Release
          </label>
        </div>

        <input type="checkbox" id={`my-modal-${name}`} class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative flex flex-col m-auto items-center">
            <label
              htmlFor={`my-modal-${name}`}
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
