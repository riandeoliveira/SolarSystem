import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import venusMap from "../../../assets/textures/venus-map.jpg";

interface VenusProps extends MeshProps {
  radius: number;
}

export const Venus = (props: VenusProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, venusMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[props.radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
