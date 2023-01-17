import * as THREE from "three";
import { DoubleSide } from "three";
import { earth } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const dayMap = loader.load(earth.texture.day);
const specularMap = loader.load(earth.texture.specular);
const cloudsMap = loader.load(earth.texture.clouds);

const geometry = new THREE.SphereGeometry(earth.radius, 100, 100);

const cloudsMaterial = new THREE.MeshPhongMaterial({
  depthWrite: true,
  emissive: 10,
  emissiveIntensity: 10,
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
  metalness: 0.7,
  roughness: 0.5,
});

const cloudsMesh = new THREE.Mesh(geometry, cloudsMaterial);
const earthMesh = new THREE.Mesh(geometry, earthStandardMaterial);

cloudsMesh.position.x = earth.distance;
earthMesh.position.x = earth.distance;

scene.add(cloudsMesh);
scene.add(earthMesh);
