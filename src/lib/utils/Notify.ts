import {toast} from "react-toastify";


export const Notify = (message: string, type: 'info' | 'success' | 'warning' | 'error') => {
  switch (type) {
    case 'info':
      toast.info(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};
