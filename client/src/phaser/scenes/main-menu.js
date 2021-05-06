import Phaser from 'phaser'
import game from '../gameConfig'
import { startNewScene, stopCurrentScene } from '../logic/scenes'

class MainMenu extends Phaser.Scene {
  constructor() {
    super({key: 'MainMenu'}),
    this.isAsleep = false,
    this.turn = 1
  }

  create() {
    let centerX = game.config.width/2
    let centerY = game.config.height/2

    this.backGround = this.add.sprite(centerX, centerY, 'sky')
    let gameName = this.add.text(centerX, centerY - 150, 'Some Guys Dumb Game', {
      fontFamily: 'fantasy',
      fontSize: '40px',
      color: '#f6ef19',
      strokeThickness: 7,
      stroke: '#000000',
      fontWeight: 'bold'
    }).setOrigin(.5, .5)
    gameName.setShadow(5, 5, '#000000', 5)

    let start = this.startButton = this.add.rectangle(centerX, centerY, 300, 75, 0xfaf9d6).setInteractive()
    start.text = this.add.text(centerX, centerY, 'Start Game', { fill: 0x5debf4 }).setOrigin(.5, .5)

    let tutorial = this.tutorialButton = this.add.rectangle(centerX, centerY + 100, 300, 75, 0xfaf9d6).setInteractive()
    tutorial.text = this.add.text(centerX, centerY + 100, 'Tutorial', { fill: 0x5debf4 }).setOrigin(.5, .5)

    start.on('pointerover', () => {
      start.fillColor = 0x56554f
      start.alpha = .9
    })

    start.on('pointerout', () => {
      start.fillColor = 0xfaf9d6
      start.alpha = 1
    })

    start.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0)
      setTimeout(stopCurrentScene, 800, 'MainMenu')
      setTimeout(startNewScene, 800, 'SceneOne')
    })


    tutorial.on('pointerover', () => {
      tutorial.fillColor = 0x56554f
      tutorial.alpha = .9
    })

    tutorial.on('pointerout', () => {
      tutorial.fillColor = 0xfaf9d6
      tutorial.alpha = 1
    })


  }

  update() {

  }
}

export default MainMenu
