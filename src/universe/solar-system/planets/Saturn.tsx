import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import saturnMap from "../../../assets/textures/saturn-map.jpg";

interface SaturnProps extends MeshProps {
  radius: number;
}

export const Saturn = (props: SaturnProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, saturnMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[props.radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
