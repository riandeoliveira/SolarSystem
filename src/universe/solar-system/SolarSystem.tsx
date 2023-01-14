import { Earth } from "./Earth";
import { Jupiter } from "./Jupiter";
import { Mars } from "./Mars";
import { Mercury } from "./Mercury";
import { Saturn } from "./Saturn";
import { Sun } from "./Sun";
import { Uranus } from "./Uranus";
import { Venus } from "./Venus";

export const SolarSystem = (): JSX.Element => {
  return (
    <>
      <Sun position={[20, 0, 0]} />
      <Mercury position={[40, 0, 0]} />
      <Venus position={[60, 0, 0]} />
      <Earth position={[-20, 0, 0]} />
      <Mars position={[100, 0, 0]} />
      <Jupiter position={[200, 0, 0]} />
      <Saturn position={[250, 0, 0]} />
      <Uranus position={[0, 0, 0]} />
    </>
  );
};
