import { OrbitControls } from "@react-three/drei";
import { SolarSystem } from "./solar-system/SolarSystem";
import { StarGroup } from "./StarGroup";

export const Universe = (): JSX.Element => {
  return (
    <>
      <OrbitControls zoomSpeed={0.5} minDistance={1.1} maxDistance={1600} />
      <SolarSystem />
      <StarGroup />
    </>
  );
};
