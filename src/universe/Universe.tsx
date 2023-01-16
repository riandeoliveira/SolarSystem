import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useSelector } from "react-redux/es/exports";
import { selectCameraTarget } from "../redux/solar-system/selectors";

interface UniverseProps {
  children: JSX.Element | JSX.Element[];
}

export const Universe = ({ children }: UniverseProps): JSX.Element => {
  const target: number[] = useSelector(selectCameraTarget);

  return (
    <>
      {/* <ambientLight /> */}
      {/* <OrbitControls zoomSpeed={1} enablePan={false} target={target as any} /> */}
      {children}
    </>
  );
};
