import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import uranusMap from "../../../assets/textures/uranus-map.jpg";

interface UranusProps extends MeshProps {
  radius: number;
}

export const Uranus = (props: UranusProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, uranusMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[props.radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
