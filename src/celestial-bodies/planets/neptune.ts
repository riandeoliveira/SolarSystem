import * as THREE from "three";
import { neptune } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(neptune.texture);

const geometry = new THREE.SphereGeometry(neptune.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = neptune.distance;

scene.add(mesh);
