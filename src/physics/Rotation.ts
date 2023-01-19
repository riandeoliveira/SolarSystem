import * as THREE from "three";

export class Rotation {
  constructor(protected target: THREE.Mesh, protected velocity: number) {}

  public rotate(): void {
    this.target.rotation.y += this.velocity;
  }
}
