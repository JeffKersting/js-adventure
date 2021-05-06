import game from '../gameConfig'

export function startNewScene(scene) {
  if (game.scene.scenes[game.scene.getIndex(scene)].isAsleep) {
    game.scene.wake(scene)
    game.scene.resume(scene)
    game.scene.scenes[game.scene.getIndex(scene)].isAsleep = true;
  }
  game.scene.start(scene);
}

export function stopCurrentScene(scene, sceneObject) {
  game.scene.pause(scene);
  game.scene.sleep(scene);
  game.scene.scenes[game.scene.getIndex(scene)].isAsleep = true;
}
