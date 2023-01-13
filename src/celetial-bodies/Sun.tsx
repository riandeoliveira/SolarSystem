import { Sparkles } from "@react-three/drei";
import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture, TextureLoader } from "three";

interface SunProps extends MeshProps {}

export const Sun = (props: SunProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, "sun.jpg");
  const sunRef = useRef<Mesh>(null!);

  useFrame(() => (sunRef.current.rotation.y += 0.001));

  return (
    <>
      <ambientLight intensity={1} />
      <mesh {...props} ref={sunRef}>
        <Sparkles scale={2} count={100} />
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};
