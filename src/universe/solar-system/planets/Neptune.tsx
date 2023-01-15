import { MeshProps, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import neptuneMap from "../../../assets/textures/neptune-map.jpg";

interface NeptuneProps extends MeshProps {}

export const Neptune = (props: NeptuneProps): JSX.Element => {
  const colorMap: Texture = useLoader(TextureLoader, neptuneMap);

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
