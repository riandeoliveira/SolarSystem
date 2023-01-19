import * as THREE from "three";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare";

export class PlanetLight {
  public light: THREE.PointLight;

  constructor(
    protected texture: string,
    protected size: number,
    protected position: number
  ) {
    this.light = new THREE.PointLight(0xffffff, 0);

    this.initialize();
  }

  protected initialize(): void {
    this.setLensflare();
  }

  protected loadTextures(): THREE.Texture {
    const textureLoader = new THREE.TextureLoader();

    return textureLoader.load(this.texture);
  }

  protected setLensflare(): void {
    const loadedTexture = this.loadTextures();

    const lensflare = new Lensflare();
    const lensflareElement = new LensflareElement(loadedTexture, this.size);
    lensflare.addElement(lensflareElement);

    this.setLight(lensflare);
  }

  protected setLight(lensflare: Lensflare): void {
    this.light.position.x = this.position;
    this.light.add(lensflare);
  }
}
