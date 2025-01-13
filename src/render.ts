import * as THREE from "three";

export interface IRender {
  readonly renderer: THREE.WebGLRenderer;
}

export class Render implements IRender {
  public readonly renderer: THREE.WebGLRenderer;

  public constructor() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);
  }
}
