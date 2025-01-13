import * as THREE from "three";
import { IBackground } from "./background";
import { IStar } from "./star";

export interface IScene {
  readonly main: THREE.Scene;

  addBackground(background: IBackground): void;
  addStar(star: IStar): void;
}

export class Scene implements IScene {
  public readonly main: THREE.Scene = new THREE.Scene();

  public addBackground(background: IBackground): void {
    this.main.background = background.texture;
  }

  public addStar(star: IStar): void {
    this.main.add(star.light.ambient);
    this.main.add(star.light.point);
    this.main.add(star.mesh);
  }
}
