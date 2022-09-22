import {
  OPEN_CAMERA_DIALOG,
  CLOSE_CAMERA_DIALOG,
  SET_CAMERA_LIST,
} from "../types";

const initialState = {
  list: [],
  dialogState: false,
  currentItem: {},
};

const setCameraList = (state, list) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list,
  };
};

const setOpenCameraDialog = (state, data) => {
  return {
    ...state,
    dialogState: true,
    currentItem: data || {},
  };
};

const setCloseCameraDialog = (state) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
  };
};

export default function cameraReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMERA_LIST:
      return setCameraList(state, action.payload);
    case OPEN_CAMERA_DIALOG:
      return setOpenCameraDialog(state, action.payload);
    case CLOSE_CAMERA_DIALOG:
      return setCloseCameraDialog(state);
    default:
      return state;
  }
}
