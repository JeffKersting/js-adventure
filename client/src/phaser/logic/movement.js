import game from '../gameConfig'

export function moveRight(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = false;
  player.setVelocityX(150);
}

export function moveLeft(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = true;
  player.setVelocityX(-150);
}

export function moveUp(scene) {
  let player = game.scene.keys[scene].player;
  
  player.setVelocityY(-150);
}

export function moveDown(scene) {
  let player = game.scene.keys[scene].player;

  player.setVelocityY(150);
}
