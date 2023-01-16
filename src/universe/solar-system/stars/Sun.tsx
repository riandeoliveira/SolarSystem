import { Sparkles } from "@react-three/drei";
import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { Mesh, Texture, TextureLoader } from "three";
import sunMap from "../../../assets/textures/sun-map.jpg";

interface SunProps extends MeshProps {
  radius: number;
}

export const Sun = (props: SunProps): JSX.Element => {
  const sunRef = useRef<Mesh>(null!);

  const colorMap: Texture = useLoader(TextureLoader, sunMap);

  useFrame(() => {
    sunRef.current.rotation.y += 0.001;
  });

  return (
    <>
      {/* <EffectComposer>
        <Bloom luminanceThreshold={0} />
      </EffectComposer> */}
      <mesh {...props} ref={sunRef}>
        <pointLight intensity={3} position={[10, 0, 0]} />
        {/* <ambientLight /> */}
        <Sparkles scale={2} count={100} />
        <sphereGeometry args={[props.radius, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};
