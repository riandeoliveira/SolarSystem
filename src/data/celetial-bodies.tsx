import { Earth } from "../universe/solar-system/planets/Earth";
import { Jupiter } from "../universe/solar-system/planets/Jupiter";
import { Mars } from "../universe/solar-system/planets/Mars";
import { Mercury } from "../universe/solar-system/planets/Mercury";
import { Neptune } from "../universe/solar-system/planets/Neptune";
import { Saturn } from "../universe/solar-system/planets/Saturn";
import { Uranus } from "../universe/solar-system/planets/Uranus";
import { Venus } from "../universe/solar-system/planets/Venus";
import { Sun } from "../universe/solar-system/stars/Sun";

const radiusInMeters = {
  sun: 696340000,
  mercury: 2439700,
  venus: 6051800,
  earth: 6378100,
  mars: 3389500,
  jupiter: 69911000,
  saturn: 58232000,
  uranus: 25362000,
  neptune: 24622000,
};

export const celestialBodies: JSX.Element[] = [
  <Sun position={[0, 0, 0]} radius={radiusInMeters.sun} />,
  <Mercury position={[57910000000, 0, 0]} radius={radiusInMeters.mercury} />,
  <Venus position={[108200000000, 0, 0]} radius={radiusInMeters.venus} />,
  <Earth position={[149600000000, 0, 0]} radius={radiusInMeters.earth} />,
  <Mars position={[227940000000, 0, 0]} radius={radiusInMeters.mars} />,
  <Jupiter position={[778330000000, 0, 0]} radius={radiusInMeters.jupiter} />,
  <Saturn position={[1429400000000, 0, 0]} radius={radiusInMeters.saturn} />,
  <Uranus position={[2870990000000, 0, 0]} radius={radiusInMeters.uranus} />,
  <Neptune position={[4504300000000, 0, 0]} radius={radiusInMeters.neptune} />,
];
