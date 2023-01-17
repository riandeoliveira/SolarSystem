import * as THREE from "three";
import { sun } from "../../data/celestial-bodies.json";
import { sunLight } from "../../lights";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(sun.texture);

const geometry = new THREE.SphereGeometry(sun.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = sun.distance;

scene.add(mesh);
scene.add(sunLight);
