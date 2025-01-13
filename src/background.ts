import { CubeTexture, CubeTextureLoader } from "three";

export interface IBackground {
  readonly texture: CubeTexture;
}

export class Background implements IBackground {
  public readonly texture: CubeTexture;

  public constructor() {
    this.texture = new CubeTextureLoader()
      .setPath("src/assets/textures/background/")
      .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
  }
}
