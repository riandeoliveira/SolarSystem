import { SelectiveUnrealBloomPass } from "@visualsource/selective-unrealbloompass";
import { Mesh, Vector2 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ICamera } from "./camera";
import { IRender } from "./render";
import { IScene } from "./scene";

const BLOOM = 1;

export interface IBloomEffect {
  addBloomTo(mesh: Mesh): void;
  renderComposer(): void;
}

export class BloomEffect {
  private readonly composer: EffectComposer;

  public constructor(
    private readonly camera: ICamera,
    private readonly render: IRender,
    private readonly scene: IScene
  ) {
    this.composer = new EffectComposer(this.render.renderer);
    const renderPass = new RenderPass(this.scene.main, this.camera.perspective);

    this.camera.perspective.layers.enable(BLOOM);

    const resolution = new Vector2(window.innerWidth, window.innerHeight);

    const bloomPass = new SelectiveUnrealBloomPass(
      resolution,
      1.5,
      0.1,
      0.1,
      true,
      BLOOM,
      this.scene.main,
      this.camera.perspective
    );

    this.composer.addPass(renderPass);
    this.composer.addPass(bloomPass);
  }

  public addBloomTo(mesh: Mesh): void {
    mesh.layers.set(BLOOM);
  }

  public renderComposer(): void {
    this.composer.render();
  }
}
