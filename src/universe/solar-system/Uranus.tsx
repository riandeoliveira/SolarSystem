import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import uranusMap from "../../assets/textures/uranus-map.jpg";

interface UranusProps extends MeshProps {}

export const Uranus = (props: UranusProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, uranusMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
