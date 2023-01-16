import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import marsMap from "../../../assets/textures/mars-map.jpg";

interface MarsProps extends MeshProps {
  radius: number;
}

export const Mars = (props: MarsProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, marsMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[props.radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
