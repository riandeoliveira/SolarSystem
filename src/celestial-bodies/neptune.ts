import * as THREE from "three";
import { neptune } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(neptune.textures.surface);

const geometry = new THREE.SphereGeometry(neptune.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const neptuneMesh = new THREE.Mesh(geometry, material);

neptuneMesh.position.x = neptune.distance;

export const neptuneLight = new PlanetLight(
  neptune.textures.light,
  5,
  neptune.distance
);

export const neptuneTranslation = new Translation(
  neptuneMesh,
  neptuneLight,
  neptune.distance,
  0.00001
);

export const neptuneOrbit = new Orbit(neptune.distance);
