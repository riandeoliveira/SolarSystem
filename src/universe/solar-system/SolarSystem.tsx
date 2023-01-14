import { Earth } from "./Earth";
import { Sun } from "./Sun";

export const SolarSystem = (): JSX.Element => {
  return (
    <>
      <Sun position={[20, 0, 0]} />
      <Earth position={[0, 0, 0]} />
    </>
  );
};
