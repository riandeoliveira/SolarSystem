import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sun } from "./celetial-bodies/Sun";

export const App = (): JSX.Element => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars count={10000} depth={100} factor={1} />
      <Sun />
    </Canvas>
  );
};
