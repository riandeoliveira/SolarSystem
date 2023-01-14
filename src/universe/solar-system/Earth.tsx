import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

interface EarthProps extends MeshProps {}

export const Earth = (props: EarthProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, "earth.jpg");

  return (
    <>
      <directionalLight position={[0.5, 0, 0]} />
      <mesh {...props}>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial displacementScale={0.2} map={colorMap} />
      </mesh>
    </>
  );
};
