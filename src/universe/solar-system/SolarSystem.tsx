import { Earth } from "./Earth";
import { Jupiter } from "./Jupiter";
import { Mars } from "./Mars";
import { Mercury } from "./Mercury";
import { Sun } from "./Sun";
import { Venus } from "./Venus";

export const SolarSystem = (): JSX.Element => {
  return (
    <>
      <Sun position={[20, 0, 0]} />
      <Mercury position={[40, 0, 0]} />
      <Venus position={[60, 0, 0]} />
      <Earth position={[-20, 0, 0]} />
      <Mars position={[100, 0, 0]} />
      <Jupiter position={[0, 0, 0]} />
    </>
  );
};
