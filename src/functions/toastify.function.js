import { toast } from "react-toastify";

export function emitSuccess(text) {
    toast.success(text, {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: false,
        draggable: false,
    });
}

export function emitError(text) {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: false,
        draggable: false,
    });
}
