import { Sparkles } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Texture, TextureLoader } from "three";

export const Sun = (): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, "sun.jpg");
  const sunRef = useRef(null);

  useFrame(() => (sunRef.current.rotation.y += 0.001));

  return (
    <>
      <ambientLight intensity={1} />
      <mesh ref={sunRef}>
        <Sparkles scale={2} count={100} />
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};
