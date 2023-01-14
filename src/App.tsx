import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SolarSystem } from "./universe/solar-system/SolarSystem";
import { StarGroup } from "./universe/StarGroup";

export const App = (): JSX.Element => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <SolarSystem />
        <StarGroup />
      </Suspense>
    </Canvas>
  );
};
