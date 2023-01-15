import { Earth } from "./planets/Earth";
import { Jupiter } from "./planets/Jupiter";
import { Mars } from "./planets/Mars";
import { Mercury } from "./planets/Mercury";
import { Neptune } from "./planets/Neptune";
import { Saturn } from "./planets/Saturn";
import { Uranus } from "./planets/Uranus";
import { Venus } from "./planets/Venus";
import { Sun } from "./stars/Sun";

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
      <Uranus position={[300, 0, 0]} />
      <Neptune position={[0, 0, 0]} />
    </>
  );
};
