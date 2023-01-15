import { PayloadAction } from "../../types/redux";
import { solarSystemActionTypes } from "./action-types";

export const setCameraTarget = (
  payload: number[]
): PayloadAction<typeof payload> => ({
  type: solarSystemActionTypes.SET_CAMERA_TARGET,
  payload,
});
