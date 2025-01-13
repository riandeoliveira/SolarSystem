import * as THREE from "three";

export interface ICamera {
  perspective: THREE.PerspectiveCamera;
}

export class Camera implements ICamera {
  public perspective: THREE.PerspectiveCamera;

  public constructor() {
    this.perspective = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1e-6,
      1e27
    );

    this.perspective.position.x = 1506340000;
  }
}
