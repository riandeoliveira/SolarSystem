import { camera, controls } from "./camera";
import { sunMesh } from "./celestial-bodies/sun";
import { composer } from "./effects";
import { sunAmbientLight } from "./lights";
import { physics } from "./physics";
import { scene } from "./scene";

function animate(): void {
  requestAnimationFrame(animate);

  controls.update();
  physics.update();

  if (
    camera.position.x >= 50000000000 ||
    camera.position.y >= 50000000000 ||
    camera.position.z >= 50000000000
  ) {
    scene.remove(sunMesh);
    scene.remove(sunAmbientLight);
  } else {
    scene.add(sunMesh);
    scene.add(sunAmbientLight);
  }

  composer.render();
}

animate();
