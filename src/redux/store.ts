import { combineReducers, createStore } from "redux";
import { solarSystemReducer } from "./solar-system/reducer";

const rootReducer = combineReducers({
  solarSystem: solarSystemReducer,
});

export const store = createStore(rootReducer);
