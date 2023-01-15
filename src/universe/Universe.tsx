import { OrbitControls } from "@react-three/drei";
import { Mercury } from "./solar-system/planets/Mercury";
import { Sun } from "./solar-system/stars/Sun";
import { StarGroup } from "./StarGroup";

export const Universe = (): JSX.Element => {
  return (
    <>
      <OrbitControls
        zoomSpeed={0.5}
        minDistance={1.11}
        maxDistance={1600}
        enablePan={false}
      />
      <Sun position={[0, 0, 0]} />
      <Mercury position={[40, 0, 0]} />
      {/* <SolarSystem /> */}
      <StarGroup />
    </>
  );
};
