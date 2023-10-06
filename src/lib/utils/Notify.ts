import {toast} from "react-toastify";

const options = {
  hideProgressBar: true
}
export const Notify = (message: string, type: 'info' | 'success' | 'warning' | 'error') => {
  switch (type) {
    case 'info':
      toast.info(message, options);
      break;
    case 'success':
      toast.success(message, options);
      break;
    case 'warning':
      toast.warning(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    default:
      toast(message, options);
  }
};
