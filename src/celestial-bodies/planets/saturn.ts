import * as THREE from "three";
import { saturn } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(saturn.texture);

const geometry = new THREE.SphereGeometry(saturn.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = saturn.distance;

scene.add(mesh);
