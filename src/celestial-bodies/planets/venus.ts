import * as THREE from "three";
import { venus } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(venus.texture);

const geometry = new THREE.SphereGeometry(venus.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = venus.distance;

scene.add(mesh);
