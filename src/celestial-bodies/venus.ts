import * as THREE from "three";
import { venus } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(venus.textures.surface);

const geometry = new THREE.SphereGeometry(venus.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const venusMesh = new THREE.Mesh(geometry, material);

venusMesh.position.x = venus.distance;

export const venusLight = new PlanetLight(
  venus.textures.light,
  7,
  venus.distance
);

export const venusTranslation = new Translation(
  venusMesh,
  venusLight,
  venus.distance,
  0.005
);

export const venusOrbit = new Orbit(venus.distance);
