import * as THREE from "three";
import { PlanetLight } from "../lights/PlanetLight";

export class Translation {
  constructor(
    protected planetMesh: THREE.Mesh,
    protected planetLight: PlanetLight,
    protected distance: number,
    protected velocity: number
  ) {}

  public translate(): void {
    let orbitRadius = this.distance;
    let currentDate = Date.now();
    let date = currentDate * this.velocity

    this.planetMesh.position.set(
      Math.cos(date) * orbitRadius,
      0,
      Math.sin(date) * orbitRadius
    );

    this.planetLight.light.position.set(
      Math.cos(date) * orbitRadius,
      0,
      Math.sin(date) * orbitRadius
    );
  }
}
