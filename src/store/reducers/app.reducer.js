import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../types";

const initialState = {
  data: null,
};

const setOpenSnackbar = (state, data) => {
  return {
    ...state,
    data: {
      open: true,
      message: data.message,
      type: data.type || "success",
    },
  };
};

const setCloseSnackbar = (state) => {
  return {
    ...state,
    data: null,
  };
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return setOpenSnackbar(state, action.payload);
    case CLOSE_SNACKBAR:
      return setCloseSnackbar(state);
    default:
      return state;
  }
}
