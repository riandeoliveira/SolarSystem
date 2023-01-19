import * as THREE from "three";
import { jupiter } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(jupiter.textures.surface);

const geometry = new THREE.SphereGeometry(jupiter.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const jupiterMesh = new THREE.Mesh(geometry, material);

jupiterMesh.position.x = jupiter.distance;

export const jupiterLight = new PlanetLight(
  jupiter.textures.light,
  5,
  jupiter.distance
);

export const jupiterTranslation = new Translation(
  jupiterMesh,
  jupiterLight,
  jupiter.distance,
  0.0002
);

export const jupiterOrbit = new Orbit(jupiter.distance)
