import {
  addCamera,
  editCamera,
  deleteCamera,
  openCameraDialog,
  closeCameraDialog,
} from "../actions";
import {
  ADD_CAMERA,
  EDIT_CAMERA,
  DELETE_CAMERA,
  OPEN_CAMERA_DIALOG,
  CLOSE_CAMERA_DIALOG,
} from "../types";

const initialState = {
  list: [],
  dialogState: false,
  currentItem: {},
};

export default function cameraReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAMERA:
      return addCamera(state, action.payload);
    case EDIT_CAMERA:
      return editCamera(state, action.payload);
    case DELETE_CAMERA:
      return deleteCamera(state, action.payload);
    case OPEN_CAMERA_DIALOG:
      return openCameraDialog(state, action.payload);
    case CLOSE_CAMERA_DIALOG:
      return closeCameraDialog(state);
    default:
      return state;
  }
}
