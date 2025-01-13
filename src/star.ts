import {
  AmbientLight,
  Mesh,
  MeshPhongMaterial,
  PointLight,
  SphereGeometry,
  TextureLoader,
} from "three";
import {
  Lensflare as LensFlare,
  LensflareElement as LensFlareElement,
} from "three/examples/jsm/objects/Lensflare";
import { ICelestialBody } from "./celestial-bodies";

interface IStarLight {
  readonly ambient: AmbientLight;
  readonly point: PointLight;
}

interface IStarData extends ICelestialBody {}

export interface IStar {
  readonly light: IStarLight;
  readonly mesh: Mesh;

  rotate(): void;
}

export class Star implements IStar {
  public readonly mesh: Mesh;
  public readonly light: IStarLight = {} as IStarLight;

  public constructor(
    private readonly data: IStarData,
    private readonly lensFlare: LensFlare,
    private readonly textureLoader: TextureLoader
  ) {
    const texture = this.textureLoader.load(this.data.texture.surface);

    const geometry = new SphereGeometry(this.data.radius, 100, 100);
    const material = new MeshPhongMaterial({ map: texture });

    this.mesh = new Mesh(geometry, material);

    const flareTexture = textureLoader.load(this.data.texture.light);
    const lensFlareElement = new LensFlareElement(flareTexture, 100, 0);

    this.lensFlare.addElement(lensFlareElement);

    this.light = {
      ambient: new AmbientLight(0xffffff, 1.5),
      point: new PointLight(0xffffff, 1.5, 1e27),
    };
  }

  public rotate(): void {
    this.mesh.rotation.y += 0;
  }
}
