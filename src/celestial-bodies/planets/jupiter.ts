import * as THREE from "three";
import { jupiter } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(jupiter.texture);

const geometry = new THREE.SphereGeometry(jupiter.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = jupiter.distance;

scene.add(mesh);
