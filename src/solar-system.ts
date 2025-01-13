import { TextureLoader } from "three";
import { Lensflare as LensFlare } from "three/examples/jsm/objects/Lensflare";
import { Background } from "./background";
import { BloomEffect, IBloomEffect } from "./bloom-effect";
import { Camera } from "./camera";
import { celestialBodies } from "./celestial-bodies";
import { Control, IControl } from "./control";
import { Render } from "./render";
import { Scene } from "./scene";
import { IStar, Star } from "./star";

export interface ISolarSystem {
  readonly bloomEffect: IBloomEffect;
  readonly control: IControl;
  star: IStar;

  setup(): void;
}

export class SolarSystem implements ISolarSystem {
  public readonly bloomEffect: IBloomEffect;
  public readonly control: IControl;
  public star: IStar = {} as IStar;

  public constructor() {
    const background = new Background();
    const camera = new Camera();
    const lensFlare = new LensFlare();
    const render = new Render();
    const scene = new Scene();
    const textureLoader = new TextureLoader();

    this.bloomEffect = new BloomEffect(camera, render, scene);
    this.control = new Control(camera, render);

    scene.addBackground(background);

    celestialBodies.forEach((data) => {
      this.star = new Star(data, lensFlare, textureLoader);

      this.bloomEffect.addBloomTo(this.star.mesh);

      scene.addStar(this.star);
    });
  }

  public setup(): void {
    requestAnimationFrame(() => this.setup());

    this.control.orbit.update();

    console.log(this.control.orbit.getDistance());

    this.star.rotate();

    this.bloomEffect.renderComposer();
  }
}
