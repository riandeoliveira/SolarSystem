import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { DoubleSide } from "three/src/constants";
import earthCloudsMap from "../../../assets/textures/earth/clouds-map.jpg";
import earthDayMap from "../../../assets/textures/earth/day-map.jpg";
import earthSpecularMap from "../../../assets/textures/earth/specular-map.jpg";

interface EarthProps extends MeshProps {
  radius: number;
}

export const Earth = (props: EarthProps): JSX.Element => {
  const cloudsRef = useRef(null);
  const earthRef = useRef(null);

  const [colorMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    earthDayMap,
    earthSpecularMap,
    earthCloudsMap,
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    cloudsRef.current.rotation.y = elapsedTime / 6;
    earthRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh {...props} ref={cloudsRef}>
        <sphereGeometry args={[props.radius, 100, 100]} />
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
      <mesh {...props} ref={earthRef}>
        <sphereGeometry args={[props.radius, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} metalness={0.7} roughness={0.5} />
      </mesh>
    </>
  );
};
