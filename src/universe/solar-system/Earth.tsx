import { MeshProps, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { DoubleSide } from "three/src/constants";
import earthCloudsMap from "../../assets/textures/earth/clouds-map.jpg";
import earthDayMap from "../../assets/textures/earth/day-map.jpg";
import earthSpecularMap from "../../assets/textures/earth/specular-map.jpg";

interface EarthProps extends MeshProps {}

export const Earth = (props: EarthProps): JSX.Element => {
  const [colorMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    earthDayMap,
    earthSpecularMap,
    earthCloudsMap,
  ]);

  return (
    <>
      <mesh {...props}>
        <sphereGeometry args={[1.0025, 100, 100]} />
        <meshPhongMaterial
          depthWrite={true}
          map={cloudsMap}
          opacity={0.4}
          side={DoubleSide}
          transparent={true}
          emissive={10}
          emissiveIntensity={10}
        />
      </mesh>
      <mesh {...props}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          metalness={0.7}
          roughness={0.5}
        />
      </mesh>
    </>
  );
};
