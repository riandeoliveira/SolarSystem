import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Universe } from "./universe/Universe";

export const App = (): JSX.Element => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Universe />
      </Suspense>
    </Canvas>
  );
};
