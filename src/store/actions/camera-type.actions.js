import {
  ADD_CAMERA_TYPE,
  DELETE_CAMERA_TYPE,
  OPEN_CAMERA_TYPE_DIALOG,
  CLOSE_CAMERA_TYPE_DIALOG,
  EDIT_CAMERA_TYPE,
} from "../types";
import { v4 as uuidv4 } from "uuid";

export const addCameraTypeAction = (payload) => ({
  type: ADD_CAMERA_TYPE,
  payload,
});

export const editCameraTypeAction = (payload) => ({
  type: EDIT_CAMERA_TYPE,
  payload,
});

export const deleteCameraTypeAction = (payload) => ({
  type: DELETE_CAMERA_TYPE,
  payload,
});

export const openCameraTypeDialogAction = (payload) => ({
  type: OPEN_CAMERA_TYPE_DIALOG,
  payload,
});

export const closeCameraTypeDialogAction = (payload) => ({
  type: CLOSE_CAMERA_TYPE_DIALOG,
  payload,
});

export const addCameraType = (state, cameraType) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list: [
      ...state.list,
      {
        id: uuidv4(),
        name: cameraType.name,
        description: cameraType.description,
      },
    ],
  };
};

export const editCameraType = (state, cameraType) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list: [...state.list].map((item) =>
      item.id === cameraType.id ? cameraType : item
    ),
  };
};

export const deleteCameraType = (state, id) => {
  return {
    ...state,
    list: [...state.list].filter((i) => i.id !== id),
  };
};

export const openCameraTypeDialog = (state, data) => {
  return {
    ...state,
    dialogState: true,
    currentItem: data || {},
  };
};

export const closeCameraTypeDialog = (state) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
  };
};
