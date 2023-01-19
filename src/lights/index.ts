import * as THREE from "three";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare";
import { sun } from "../data/celestial-bodies.json";

const sourceTextures: string = "src/assets/textures/lensflare";

const textureLoader = new THREE.TextureLoader();

const flareTexture = textureLoader.load(sun.textures.light.flare);
// const lineTexture = textureLoader.load(`${sourceTextures}/line.png`);
const lensTexture = textureLoader.load(sun.textures.light.lens);

export const lensflare = new Lensflare();

lensflare.addElement(new LensflareElement(flareTexture, 100, 0));
// lensflare.addElement(new LensflareElement(lensTexture, 60, 0.6));
// lensflare.addElement(new LensflareElement(lensTexture, 70, 0.7));
// lensflare.addElement(new LensflareElement(lensTexture, 120, 0.9));
// lensflare.addElement(new LensflareElement(lensTexture, 70, 1));

export const sunAmbientLight = new THREE.AmbientLight(0xffffff, 1.5);
export const sunPointLight = new THREE.PointLight(0xffffff, 1.5, 1e27);
sunPointLight.add(lensflare);
