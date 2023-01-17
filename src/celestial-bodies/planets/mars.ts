import * as THREE from "three";
import { mars } from "../../data/celestial-bodies.json";
import { scene } from "../../scene/scene";

const loader = new THREE.TextureLoader();

const texture = loader.load(mars.texture);

const geometry = new THREE.SphereGeometry(mars.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = mars.distance;

scene.add(mesh);
