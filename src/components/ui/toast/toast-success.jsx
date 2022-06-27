import { toast } from "react-toastify";

function ToastSuccess(text) {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default ToastSuccess;
