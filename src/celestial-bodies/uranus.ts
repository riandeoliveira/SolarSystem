import * as THREE from "three";
import { uranus } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(uranus.textures.surface);

const geometry = new THREE.SphereGeometry(uranus.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const uranusMesh = new THREE.Mesh(geometry, material);

uranusMesh.position.x = uranus.distance;

export const uranusLight = new PlanetLight(
  uranus.textures.light,
  5,
  uranus.distance
);

export const uranusTranslation = new Translation(
  uranusMesh,
  uranusLight,
  uranus.distance,
  0.00005
);

export const uranusOrbit = new Orbit(uranus.distance)
