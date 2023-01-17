import * as THREE from "three";
import { mercury } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(mercury.texture);

const geometry = new THREE.SphereGeometry(mercury.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = mercury.distance;

scene.add(mesh);
