import { CubeTextureLoader } from "three";
import { scene } from "../scene/scene";

const background = {
  path: "src/assets/textures/background/",
  images: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
};

const backgroundTexture = new CubeTextureLoader()
  .setPath(background.path)
  .load(background.images);

scene.background = backgroundTexture;
