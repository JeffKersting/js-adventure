import Align from '../utilities/align'

export function placeBlock(scene, position, key, spritesheet) {
  let block = scene.add.sprite(0,0, key, spritesheet);
  scene.aGrid.placeAtIndex(position, block);
  Align.scaleToGameW(block, .055);
}

export function createMap(fromPosition, toPosition, scene, key, spritesheet) {
  for (let i = fromPosition; i < toPosition + 1; i++) {
    placeBlock(scene, i, key, spritesheet)
  }
}

export function placeObstacleBlock(scene, position, key, spritesheet, group) {
  let block = scene.add.sprite(0,0, key, spritesheet);
  scene.aGrid.placeAtIndex(position, block);
  Align.scaleToGameW(block, .055);
}

export function createObstacle(scene, positions, key, spritesheet, group) {
  positions.forEach(position => {
    let block = scene.add.sprite(0,0, key, spritesheet);
    group.add(block)
    scene.aGrid.placeAtIndex(position, block);
    Align.scaleToGameW(block, .055);
  })
}
