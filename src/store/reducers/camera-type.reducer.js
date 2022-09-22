import {
  OPEN_CAMERA_TYPE_DIALOG,
  CLOSE_CAMERA_TYPE_DIALOG,
  SET_CAMERA_TYPE_LIST,
} from "../types";

const initialState = {
  list: [],
  dialogState: false,
  currentItem: {},
};

const setCameraTypeList = (state, list) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list,
  };
};

const setOpenCameraTypeDialog = (state, data) => {
  return {
    ...state,
    dialogState: true,
    currentItem: data || {},
  };
};

const setCloseCameraTypeDialog = (state) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
  };
};

export default function cameraTypeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMERA_TYPE_LIST:
      return setCameraTypeList(state, action.payload);
    case OPEN_CAMERA_TYPE_DIALOG:
      return setOpenCameraTypeDialog(state, action.payload);
    case CLOSE_CAMERA_TYPE_DIALOG:
      return setCloseCameraTypeDialog(state);
    default:
      return state;
  }
}
