import {
  OPEN_CAMERA_TYPE_DIALOG,
  CLOSE_CAMERA_TYPE_DIALOG,
  SET_CAMERA_TYPE_LIST,
} from "../types";
import { openSnackbarAction } from "./app.actions";
import { v4 as uuidv4 } from "uuid";

export const setCameraTypeListAction = (payload) => ({
  type: SET_CAMERA_TYPE_LIST,
  payload,
});

export const openCameraTypeDialogAction = (payload) => ({
  type: OPEN_CAMERA_TYPE_DIALOG,
  payload,
});

export const closeCameraTypeDialogAction = () => ({
  type: CLOSE_CAMERA_TYPE_DIALOG,
});

export const addCameraTypeAction =
  (cameraType) => async (dispatch, getState) => {
    const cameraTypesList = getState().cameraTypes.list;
    dispatch(
      setCameraTypeListAction([
        ...cameraTypesList,
        {
          id: uuidv4(),
          ...cameraType,
        },
      ])
    );
    dispatch(
      openSnackbarAction({
        message: "Camera type added succesfully",
        type: "success",
      })
    );
  };

export const editCameraTypeAction =
  (cameraType) => async (dispatch, getState) => {
    const cameraTypesList = getState().cameraTypes.list;
    dispatch(
      setCameraTypeListAction(
        [...cameraTypesList].map((item) =>
          item.id === cameraType.id ? cameraType : item
        )
      )
    );
    dispatch(
      openSnackbarAction({
        message: "Camera type edited succesfully",
        type: "success",
      })
    );
  };

export const deleteCameraTypeAction = (id) => async (dispatch, getState) => {
  const cameraTypesList = getState().cameraTypes.list;
  const cameras = getState().cameras.list;

  const isUsedType = cameras.find((item) => item.cameraType === id);

  if (isUsedType)
    return dispatch(
      openSnackbarAction({
        message: "You cannot delete this type of camera because it is in use!",
        type: "error",
      })
    );

  dispatch(
    setCameraTypeListAction([...cameraTypesList].filter((i) => i.id !== id))
  );
  dispatch(
    openSnackbarAction({
      message: "Camera type deleted succesfully",
      type: "success",
    })
  );
};
