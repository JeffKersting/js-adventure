function discipleFightAnimation(scene) {
  var discipleFight = scene.anims.create({
    key: 'discipleFight',
    repeat: -1,
    frameRate: 7,
    yoyo: true,
    frames: scene.anims.generateFrameNames('disciple', {
      start: 0,
      end: 4
    })
  })
  return discipleFight;
}

function discipleDeathAnimation(scene) {
  var discipleDeath = scene.anims.create({
    key: 'discipleDeath',
    repeat: 0,
    frameRate: 7,
    frames: scene.anims.generateFrameNames('disciple', {
      start: 5,
      end: 11
    })
  })
  return discipleDeath;
}



function enemyFireballExplosion(fireball, scene) {
  scene.anims.create({
    key: 'enemyFireball',
    repeat: 0,
    frameRate: 7,
    frames: scene.anims.generateFrameNames('fireball', {
      start: 0,
      end: 3
    })
  })
  fireball.setVelocity(0,0)
  fireball.play('enemyFireball', false)
}

function enemyFireballShot(scene) {
  let fireball = scene.physics.add.sprite(765, 175, 'fireball', 4).setScale(2)
  fireball.setVelocity(-400, 15)
  setTimeout(enemyFireballExplosion, 1415, fireball, scene)
  setTimeout(() => {fireball.destroy()}, 1500)
}
