import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { camera } from "../camera-controls/camera-controls";
import { renderer } from "../render";
import { scene } from "../scene/scene";

export const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);

composer.addPass(renderPass);

const unrealBloomPassProps = {
  resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
  strength: 1.5,
  radius: 0.1,
  threshold: 0.1,
};

const { resolution, strength, radius, threshold } = unrealBloomPassProps;

const unrealBloomPass = new UnrealBloomPass(
  resolution,
  strength,
  radius,
  threshold
);

composer.addPass(unrealBloomPass);
