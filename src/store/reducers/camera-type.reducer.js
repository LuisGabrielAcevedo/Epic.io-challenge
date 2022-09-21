import {
  addCameraType,
  editCameraType,
  deleteCameraType,
  openCameraTypeDialog,
  closeCameraTypeDialog,
} from "../actions";
import {
  ADD_CAMERA_TYPE,
  EDIT_CAMERA_TYPE,
  DELETE_CAMERA_TYPE,
  OPEN_CAMERA_TYPE_DIALOG,
  CLOSE_CAMERA_TYPE_DIALOG,
} from "../types";

const initialState = {
  list: [],
  dialogState: false,
  currentItem: {},
};

export default function cameraTypeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAMERA_TYPE:
      return addCameraType(state, action.payload);
    case EDIT_CAMERA_TYPE:
      return editCameraType(state, action.payload);
    case DELETE_CAMERA_TYPE:
      return deleteCameraType(state, action.payload);
    case OPEN_CAMERA_TYPE_DIALOG:
      return openCameraTypeDialog(state, action.payload);
    case CLOSE_CAMERA_TYPE_DIALOG:
      return closeCameraTypeDialog(state);
    default:
      return state;
  }
}
