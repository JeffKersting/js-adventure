import Phaser from 'phaser'
import * from './scenes/index'

const gameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0}
    }
  },
  scene: [ Preloader, Splash, MainMenu, SceneOne, SceneTwo ]
}

const game = new Phaser.Game(gameConfig)

export default game
