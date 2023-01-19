import * as THREE from "three";
import { DoubleSide } from "three";
import { earth } from "../data/celestial-bodies.json";
import { PlanetLight } from "../lights/PlanetLight";
import { Orbit } from "../orbits/Orbit";
import { Rotation } from "../physics/Rotation";
import { Translation } from "../physics/Translation";

const { textures, velocity } = earth;

const loader = new THREE.TextureLoader();

const dayMap = loader.load(textures.surface.day);
const specularMap = loader.load(textures.surface.specular);
const cloudsMap = loader.load(textures.surface.clouds);

const geometry = new THREE.SphereGeometry(earth.radius, 100, 100);

const cloudsMaterial = new THREE.MeshPhongMaterial({
  depthWrite: false,
  emissive: 1,
  emissiveIntensity: 1,
  map: cloudsMap,
  opacity: 0.4,
  side: DoubleSide,
  transparent: true,
});
const earthPhongMaterial = new THREE.MeshPhongMaterial({
  specularMap,
});
const earthStandardMaterial = new THREE.MeshStandardMaterial({
  map: dayMap,
  metalness: 0.4,
  roughness: 0.7,
});

export const earthCloudsMesh = new THREE.Mesh(geometry, cloudsMaterial);
export const earthSpecularMesh = new THREE.Mesh(geometry, earthPhongMaterial);
export const earthMesh = new THREE.Mesh(geometry, earthStandardMaterial);

earthSpecularMesh.position.x = earth.distance;
earthCloudsMesh.position.x = earth.distance;
earthMesh.position.x = earth.distance;

export const earthSpecularRotation = new Rotation(
  earthSpecularMesh,
  velocity.rotation
);
export const earthCloudsRotation = new Rotation(
  earthCloudsMesh,
  velocity.rotation
);
export const earthMeshRotation = new Rotation(earthMesh, velocity.rotation);

export const earthLight = new PlanetLight(textures.light, 5, earth.distance);

export const earthSpecularTranslation = new Translation(
  earthSpecularMesh,
  earthLight,
  earth.distance,
  0.0008
);

export const earthCloudsTranslation = new Translation(
  earthCloudsMesh,
  earthLight,
  earth.distance,
  0.0008
);

export const earthMeshTranslation = new Translation(
  earthMesh,
  earthLight,
  earth.distance,
  0.0008
);

export const earthOrbit = new Orbit(earth.distance);
