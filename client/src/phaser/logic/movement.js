import game from '../gameConfig'

export function moveRight(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = false;
  player.x += 2.5;
}

export function moveLeft(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = true;
  player.x -= 2.5;
}

export function moveUp(scene) {
  let player = game.scene.keys[scene].player;
  player.y -= 2.5;
}

export function moveDown(scene) {
  let player = game.scene.keys[scene].player;
  player.y += 2.5;
}
