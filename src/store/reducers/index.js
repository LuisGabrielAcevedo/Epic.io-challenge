import cameraReducer from "./camera.reducer";
import cameraTypeReducer from "./camera-type.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cameras: cameraReducer,
  cameraTypes: cameraTypeReducer,
});

export default rootReducer;
