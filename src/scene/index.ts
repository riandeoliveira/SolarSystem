import * as THREE from "three";
import { backgroundTexture } from "../background";
import {
  earthCloudsMesh,
  earthLight,
  earthMesh,
  earthOrbit,
  earthSpecularMesh,
} from "../celestial-bodies/earth";
import {
  jupiterLight,
  jupiterMesh,
  jupiterOrbit,
} from "../celestial-bodies/jupiter";
import { marsLight, marsMesh, marsOrbit } from "../celestial-bodies/mars";
import {
  mercuryLight,
  mercuryMesh,
  mercuryOrbit,
} from "../celestial-bodies/mercury";
import {
  neptuneLight,
  neptuneMesh,
  neptuneOrbit,
} from "../celestial-bodies/neptune";
import {
  saturnLight,
  saturnMesh,
  saturnOrbit,
} from "../celestial-bodies/saturn";
import { sunMesh } from "../celestial-bodies/sun";
import {
  uranusLight,
  uranusMesh,
  uranusOrbit,
} from "../celestial-bodies/uranus";
import { venusLight, venusMesh, venusOrbit } from "../celestial-bodies/venus";
import { sunAmbientLight, sunPointLight } from "../lights";

export const scene = new THREE.Scene();

scene.background = backgroundTexture;

scene.add(neptuneLight.light);
scene.add(uranusLight.light);
scene.add(saturnLight.light);
scene.add(jupiterLight.light);
scene.add(marsLight.light);
scene.add(venusLight.light);
scene.add(mercuryLight.light);
scene.add(earthLight.light);
scene.add(earthCloudsMesh);
scene.add(earthMesh);
scene.add(earthSpecularMesh);
scene.add(jupiterMesh);
scene.add(marsMesh);
scene.add(mercuryMesh);
scene.add(neptuneMesh);
scene.add(saturnMesh);
scene.add(sunAmbientLight);
scene.add(sunMesh);
scene.add(sunPointLight);
scene.add(uranusMesh);
scene.add(venusMesh);
scene.add(mercuryOrbit.mesh);
scene.add(venusOrbit.mesh);
scene.add(earthOrbit.mesh);
scene.add(marsOrbit.mesh);
scene.add(jupiterOrbit.mesh);
scene.add(saturnOrbit.mesh);
scene.add(uranusOrbit.mesh);
scene.add(neptuneOrbit.mesh);
