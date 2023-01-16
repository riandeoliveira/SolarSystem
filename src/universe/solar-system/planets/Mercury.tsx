import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import mercuryMap from "../../../assets/textures/mercury-map.jpg";

interface MercuryProps extends MeshProps {
  radius: number;
}

export const Mercury = (props: MercuryProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, mercuryMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[props.radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
