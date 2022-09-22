import cameraReducer from "./camera.reducer";
import cameraTypeReducer from "./camera-type.reducer";
import appReducer from "./app.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  cameras: cameraReducer,
  cameraTypes: cameraTypeReducer,
});

export default rootReducer;
