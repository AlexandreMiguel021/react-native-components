import { ToastConfig, showToast, store } from "@store";
import { AppError, isString } from "@utils";

export const toast = {
  success: (message: unknown, config?: ToastConfig) => {
    store.dispatch(showToast({ message, type: "success", config }));
  },

  error: (message: unknown, config?: ToastConfig) => {
    store.dispatch(
      showToast({ message: errorHandler(message), type: "error", config })
    );
  },

  warn: (message: unknown, config?: ToastConfig) => {
    store.dispatch(showToast({ message, type: "warn", config }));
  },

  info: (message: unknown, config?: ToastConfig) => {
    store.dispatch(showToast({ message, type: "info", config }));
  },

  handleError: (payload: unknown, config: ToastConfig) => {
    let err;

    if (isString(payload)) {
      err = toast.error(new AppError(payload));
    } else {
      err = new AppError("Oooops! algo deu errado.");
    }

    store.dispatch(showToast({ message: err, type: "error", config }));
  },
};

function errorHandler(error: unknown) {
  if (isString(error)) return error;

  if (error instanceof Error) return error.message;

  if (error instanceof AppError) return error.message;
}
