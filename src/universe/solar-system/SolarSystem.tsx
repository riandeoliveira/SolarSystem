import { useDispatch } from "react-redux";
import { celestialBodies } from "../../data/celetial-bodies";
import { setCameraTarget } from "../../redux/solar-system/actions";

export const SolarSystem = (): JSX.Element => {
  const dispatch = useDispatch();

  const focus = (asd: any) => {
    dispatch(setCameraTarget(asd.point));
  };

  return <></>

  return <>{celestialBodies.map((celestialBody) => celestialBody)}</>;
};
