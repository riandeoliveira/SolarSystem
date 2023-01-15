import { RootState } from "../../types/redux";

export const selectCameraTarget = (state: RootState) =>
  state.solarSystem.camera.target;
