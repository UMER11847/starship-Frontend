import { toast } from 'react-toastify';

function toaster(type, msg) {
    return toast[type](msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
}

export default toaster