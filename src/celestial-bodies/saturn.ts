import * as THREE from "three";
import { saturn } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(saturn.textures.surface);

const geometry = new THREE.SphereGeometry(saturn.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const saturnMesh = new THREE.Mesh(geometry, material);

saturnMesh.position.x = saturn.distance;

export const saturnLight = new PlanetLight(
  saturn.textures.light,
  5,
  saturn.distance
);

export const saturnTranslation = new Translation(
  saturnMesh,
  saturnLight,
  saturn.distance,
  0.00008
);

export const saturnOrbit = new Orbit(saturn.distance)
