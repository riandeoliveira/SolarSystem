import { CubeTextureLoader } from "three";

const background = {
  path: "src/assets/textures/background/",
  images: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
};

export const backgroundTexture = new CubeTextureLoader()
  .setPath(background.path)
  .load(background.images);
