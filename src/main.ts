import "./background/background";
import { controls } from "./camera-controls/camera-controls";
import "./celestial-bodies/planets/earth";
import "./celestial-bodies/planets/jupiter";
import "./celestial-bodies/planets/mars";
import "./celestial-bodies/planets/mercury";
import "./celestial-bodies/planets/neptune";
import "./celestial-bodies/planets/saturn";
import "./celestial-bodies/planets/uranus";
import "./celestial-bodies/planets/venus";
import "./celestial-bodies/stars/sun";
import { composer } from "./effects";
import "./lights";

function animate(): void {
  requestAnimationFrame(animate);

  controls.update();

  composer.render();
}

animate();
