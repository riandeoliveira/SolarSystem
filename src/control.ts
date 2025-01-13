import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ICamera } from "./camera";
import { IRender } from "./render";

export interface IControl {
  readonly orbit: OrbitControls;
}

export class Control implements IControl {
  public readonly orbit: OrbitControls;

  public constructor(
    private readonly camera: ICamera,
    private readonly render: IRender
  ) {
    this.orbit = new OrbitControls(
      this.camera.perspective,
      this.render.renderer.domElement
    );

    this.orbit.enableDamping = true;
    this.orbit.maxDistance = 1e13;

    this.orbit.target = new THREE.Vector3(0, 0, 0); // sun
    // controls.target = new THREE.Vector3(57910000000, 0, 0); // mercury
    // controls.target = new THREE.Vector3(108200000000, 0, 0); // venus
    // controls.target = new THREE.Vector3(149600000000, 0, 0); // earth
    // controls.target = new THREE.Vector3(227940000000, 0, 0); // mars
    // controls.target = new THREE.Vector3(778330000000, 0, 0); // jupiter
    // controls.target = new THREE.Vector3(1429400000000, 0, 0); // saturn
    // controls.target = new THREE.Vector3(2870990000000, 0, 0); // uranus
    // controls.target = new THREE.Vector3(4504300000000, 0, 0); // neptune
  }
}
