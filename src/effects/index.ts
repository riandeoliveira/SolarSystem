import { SelectiveUnrealBloomPass } from "@visualsource/selective-unrealbloompass";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { camera } from "../camera";
import { sunMesh } from "../celestial-bodies/sun";
import { renderer } from "../render";
import { scene } from "../scene";

export const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);

export const BLOOM = 1;

// setup renderer, camera, scene, etc

camera.layers.enable(BLOOM);

const bloomPass = new SelectiveUnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.1,
  0.1,
  true,
  BLOOM,
  scene,
  camera
);

composer.addPass(renderPass);
composer.addPass(bloomPass);

sunMesh.layers.set(BLOOM);
