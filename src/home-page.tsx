import { ReactElement, useEffect, useState } from "react";
import { ISolarSystem } from "./solar-system";

type HomePageProps = Omit<ISolarSystem, "setup">;

export const HomePage = ({ control }: HomePageProps): ReactElement => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      setDistance(control.orbit.getDistance());
    };

    // Atualiza o estado a cada frame
    const animationFrame = () => {
      updateDistance();
      requestAnimationFrame(animationFrame);
    };

    requestAnimationFrame(animationFrame);

    // Cleanup para evitar problemas de performance
    return () => cancelAnimationFrame(0);
  }, [control]);

  return <h1 className="absolute text-white p-4">{distance}</h1>;
};
