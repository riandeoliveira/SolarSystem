import * as THREE from "three";
import { Vector3 } from "three";
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

camera.position.x = 149600000000;

export const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.target = new Vector3(149600000000, 0, 0);
