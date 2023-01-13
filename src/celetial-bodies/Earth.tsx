import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export const Earth = (): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, "earth.jpg");

  return (
    <>
      <directionalLight position={[0.5, 0, 0]} />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial displacementScale={0.2} map={colorMap} />
      </mesh>
    </>
  );
};
