import * as THREE from "three";
import { mars } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(mars.textures.surface);

const geometry = new THREE.SphereGeometry(mars.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const marsMesh = new THREE.Mesh(geometry, material);

marsMesh.position.x = mars.distance;

export const marsLight = new PlanetLight(mars.textures.light, 6, mars.distance);

export const marsTranslation = new Translation(
  marsMesh,
  marsLight,
  mars.distance,
  0.0005
);

export const marsOrbit = new Orbit(mars.distance)
