interface ICelestialBodyTexture {
  light: string;
  surface: string;
}

export interface ICelestialBody {
  name: string;
  type: "star" | "planet";
  radius: number;
  distanceFromCenter: number;
  texture: ICelestialBodyTexture;
}

export const celestialBodies: ICelestialBody[] = [
  {
    name: "Sun",
    type: "star",
    radius: 696340000,
    distanceFromCenter: 0,
    texture: {
      light: "/src/assets/textures/lights/flare.png",
      surface: "/src/assets/textures/sun-map.jpg",
    },
  },
  // {
  //   name: "Mercury",
  //   type: "planet",
  //   radius: 2439700,
  //   distanceFromCenter: 57910000000,
  //   texture: {
  //     light: "/src/assets/textures/lights/flare.png",
  //     surface: "/src/assets/textures/mercury-map.jpg",
  //   },
  // },
];
