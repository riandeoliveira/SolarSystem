import { Earth } from "./Earth";
import { Mercury } from "./Mercury";
import { Sun } from "./Sun";

export const SolarSystem = (): JSX.Element => {
  return (
    <>
      <Sun position={[20, 0, 0]} />
      <Mercury position={[0, 0, 0]} />
      <Earth position={[-20, 0, 0]} />
    </>
  );
};
