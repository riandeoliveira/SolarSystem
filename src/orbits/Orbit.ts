import * as THREE from "three";

export class Orbit {
  public mesh: THREE.Mesh;

  constructor(protected radius: number) {
    this.mesh = new THREE.Mesh();

    this.initialize();
  }

  protected initialize(): void {
    const xAxis: number = 1.57;

    const geometry = new THREE.TorusGeometry(this.radius, 1000000000, 16, 1000);
    const material = new THREE.MeshBasicMaterial();
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.rotation.set(xAxis, 0, 0);
  }
}
