import { toast } from "react-toastify";

function ToastError(text) {
  toast.error(text, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default ToastError;
