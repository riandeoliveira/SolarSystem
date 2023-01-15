import { PayloadAction } from "../../types/redux";
import { solarSystemActionTypes } from "./action-types";

interface SolarSystemState {
  camera: {
    target: number[];
  };
}

const initialState: SolarSystemState = {
  camera: {
    target: [0, 0, 0],
  },
};

export const solarSystemReducer = (
  state = initialState,
  action: PayloadAction<any>
): SolarSystemState => {
  switch (action.type) {
    case solarSystemActionTypes.SET_CAMERA_TARGET:
      return {
        ...state,
        camera: {
          target: action.payload,
        },
      };

    default:
      return state;
  }
};
