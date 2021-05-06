import Phaser from 'phaser'
import Preloader from './scenes/preloader'
import MainMenu from './scenes/main-menu'
import Splash from './scenes/splash'
import SceneOne from './scenes/scene-one'

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
  scene: [ Preloader, Splash, MainMenu, SceneOne ]
}

const game = new Phaser.Game(gameConfig)

export default game
