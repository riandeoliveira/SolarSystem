import * as THREE from "three";
import { uranus } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(uranus.texture);

const geometry = new THREE.SphereGeometry(uranus.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = uranus.distance;

scene.add(mesh);
