import {
  earthCloudsRotation,
  earthCloudsTranslation,
  earthMeshRotation,
  earthMeshTranslation,
  earthSpecularRotation,
} from "../celestial-bodies/earth";
import { jupiterTranslation } from "../celestial-bodies/jupiter";
import { marsTranslation } from "../celestial-bodies/mars";
import { mercuryTranslation } from "../celestial-bodies/mercury";
import { neptuneTranslation } from "../celestial-bodies/neptune";
import { saturnTranslation } from "../celestial-bodies/saturn";
import { uranusTranslation } from "../celestial-bodies/uranus";
import { venusTranslation } from "../celestial-bodies/venus";

export class Physics {
  constructor() {
    this.update();
  }

  public update(): void {
    earthSpecularRotation.rotate();
    earthCloudsRotation.rotate();
    earthMeshRotation.rotate();

    mercuryTranslation.translate();
    venusTranslation.translate();
    earthCloudsTranslation.translate();
    earthSpecularRotation.rotate();
    earthMeshTranslation.translate();
    marsTranslation.translate();
    jupiterTranslation.translate();
    saturnTranslation.translate();
    uranusTranslation.translate();
    neptuneTranslation.translate();
  }
}
