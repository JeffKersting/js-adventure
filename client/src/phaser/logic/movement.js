import game from '../gameConfig'

export function moveRight(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = false;
  player.setVelocityX(300);
}

export function moveLeft(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = true;
  player.setVelocityX(-300);
}

export function moveUp(scene) {
  let player = game.scene.keys[scene].player;

  player.setVelocityY(-300);
}

export function moveDown(scene) {
  let player = game.scene.keys[scene].player;

  player.setVelocityY(300);
}
