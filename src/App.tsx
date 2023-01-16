import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { selectCameraTarget } from "./redux/solar-system/selectors";
import { MilkyWay } from "./universe/MilkyWay";

export const App = (): JSX.Element => {
  const target = useSelector(selectCameraTarget);

  return (
    <Canvas>
      {/* <Universe> */}
      <MilkyWay>{/* <SolarSystem /> */}</MilkyWay>
      {/* </Universe> */}
      <OrbitControls target={target} />
    </Canvas>
  );
};
