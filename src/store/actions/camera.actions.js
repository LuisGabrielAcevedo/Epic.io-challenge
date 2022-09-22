import {
  OPEN_CAMERA_DIALOG,
  CLOSE_CAMERA_DIALOG,
  SET_CAMERA_LIST,
} from "../types";
import { openSnackbarAction } from "./app.actions";
import { v4 as uuidv4 } from "uuid";

export const setCameraListAction = (payload) => ({
  type: SET_CAMERA_LIST,
  payload,
});

export const openCameraDialogAction = (payload) => ({
  type: OPEN_CAMERA_DIALOG,
  payload,
});

export const closeCameraDialogAction = () => ({
  type: CLOSE_CAMERA_DIALOG,
});

export const addCameraAction = (camera) => async (dispatch, getState) => {
  const camerasList = getState().cameras.list;
  dispatch(
    setCameraListAction([
      ...camerasList,
      {
        id: uuidv4(),
        ...camera,
      },
    ])
  );
  dispatch(
    openSnackbarAction({
      message: "Camera added succesfully",
      type: "success",
    })
  );
};

export const editCameraAction = (camera) => async (dispatch, getState) => {
  const camerasList = getState().cameras.list;
  dispatch(
    setCameraListAction(
      [...camerasList].map((item) => (item.id === camera.id ? camera : item))
    )
  );
  dispatch(
    openSnackbarAction({
      message: "Camera edited succesfully",
      type: "success",
    })
  );
};

export const deleteCameraAction = (id) => async (dispatch, getState) => {
  const camerasList = getState().cameras.list;
  dispatch(setCameraListAction([...camerasList].filter((i) => i.id !== id)));
  dispatch(
    openSnackbarAction({
      message: "Camera deleted succesfully",
      type: "success",
    })
  );
};
