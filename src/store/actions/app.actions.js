import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../types";

export const openSnackbarAction = (payload) => ({
  type: OPEN_SNACKBAR,
  payload,
});

export const closeSnackbarAction = () => ({
  type: CLOSE_SNACKBAR,
});
