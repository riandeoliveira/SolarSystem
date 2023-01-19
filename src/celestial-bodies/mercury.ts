import * as THREE from "three";
import { mercury } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Translation } from "../physics/Translation";

const loader = new THREE.TextureLoader();

const texture = loader.load(mercury.textures.surface);

const geometry = new THREE.SphereGeometry(mercury.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const mercuryMesh = new THREE.Mesh(geometry, material);

mercuryMesh.position.x = mercury.distance;

export const mercuryLight = new PlanetLight(
  mercury.textures.light,
  5,
  mercury.distance
);

export const mercuryTranslation = new Translation(
  mercuryMesh,
  mercuryLight,
  mercury.distance,
  0.01
);

export const mercuryOrbit = new Orbit(mercury.distance);
