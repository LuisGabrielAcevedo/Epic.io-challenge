import {
  ADD_CAMERA,
  DELETE_CAMERA,
  OPEN_CAMERA_DIALOG,
  CLOSE_CAMERA_DIALOG,
  EDIT_CAMERA,
} from "../types";
import { v4 as uuidv4 } from "uuid";

export const addCameraAction = (payload) => ({
  type: ADD_CAMERA,
  payload,
});

export const editCameraAction = (payload) => ({
  type: EDIT_CAMERA,
  payload,
});

export const deleteCameraAction = (payload) => ({
  type: DELETE_CAMERA,
  payload,
});

export const openCameraDialogAction = (payload) => ({
  type: OPEN_CAMERA_DIALOG,
  payload,
});

export const closeCameraDialogAction = (payload) => ({
  type: CLOSE_CAMERA_DIALOG,
  payload,
});

export const addCamera = (state, camera) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list: [
      ...state.list,
      {
        id: uuidv4(),
        ...camera,
      },
    ],
  };
};

export const editCamera = (state, camera) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
    list: [...state.list].map((item) =>
      item.id === camera.id ? camera : item
    ),
  };
};

export const deleteCamera = (state, id) => {
  return {
    ...state,
    list: [...state.list].filter((i) => i.id !== id),
  };
};

export const openCameraDialog = (state, data) => {
  return {
    ...state,
    dialogState: true,
    currentItem: data || {},
  };
};

export const closeCameraDialog = (state) => {
  return {
    ...state,
    dialogState: false,
    currentItem: {},
  };
};
