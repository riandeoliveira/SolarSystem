import * as THREE from "three";
import { sun } from "../data/celestial-bodies.json";

const loader = new THREE.TextureLoader();

const texture = loader.load(sun.textures.surface);

const geometry = new THREE.SphereGeometry(sun.radius, 100, 100);
const material = new THREE.MeshPhongMaterial({ map: texture });

export const sunMesh = new THREE.Mesh(geometry, material);
