import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import jupiterMap from "../../../assets/textures/jupiter-map.jpg";

interface JupiterProps extends MeshProps {}

export const Jupiter = (props: JupiterProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, jupiterMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
