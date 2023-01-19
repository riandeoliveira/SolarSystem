import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { renderer } from "../render";

const cameraProps = {
  fov: 75,
  aspect: window.innerWidth / window.innerHeight,
  near: 1e-6,
  far: 1e27,
};

const { fov, aspect, near, far } = cameraProps;

export const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// camera.position.x = 1506340000;
camera.position.x = 10;

export const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.maxDistance = 1e13;

// controls.target = new THREE.Vector3(0, 0, 0); // sun
controls.target = new THREE.Vector3(57910000000, 0, 0); // mercury
// controls.target = new THREE.Vector3(108200000000, 0, 0); // venus
// controls.target = new THREE.Vector3(149600000000, 0, 0); // earth
// controls.target = new THREE.Vector3(227940000000, 0, 0); // mars
// controls.target = new THREE.Vector3(778330000000, 0, 0); // jupiter
// controls.target = new THREE.Vector3(1429400000000, 0, 0); // saturn
// controls.target = new THREE.Vector3(2870990000000, 0, 0); // uranus
// controls.target = new THREE.Vector3(4504300000000, 0, 0); // neptune
