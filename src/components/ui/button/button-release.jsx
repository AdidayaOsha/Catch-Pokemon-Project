import React from "react";
import ToastSuccess from "../toast/toast-success";

function ButtonRelease({ name, setTrigger }) {
  function release() {
    for (let i = 1; i <= 6; i++) {
      if (localStorage.getItem(`pokemon${i}`) === name) {
        localStorage.removeItem(`pokemon${i}`);
        setTrigger(`${name}, number ${i}`);
        ToastSuccess(`${name.toUpperCase()} has been released!`);
        break;
      }
    }
    document.getElementById(`my-modal-${name}`).click();
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
            className="btn modal-button btn-error text-white btn-sm animate-pulse"
          >
            Release
          </label>
        </div>

        <input
          type="checkbox"
          id={`my-modal-${name}`}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative flex flex-col m-auto items-center">
            <label
              htmlFor={`my-modal-${name}`}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Release {name}?</h3>
            <p className="py-2">You will be able to catch it again anytime.</p>
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
