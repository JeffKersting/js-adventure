import game from '../gameConfig'
import { startNewScene, stopCurrentScene } from '../logic/scenes'
import { createMap, createObstacle } from '../logic/levels'
import { moveRight, moveLeft, moveUp, moveDown } from '../logic/movement'
import AlignGrid from '../utilities/alignGrid'


class SceneOne extends Phaser.Scene {
  constructor() {
    super({key: 'SceneOne'}),
    this.isAsleep = false;
    this.solved = false;
  }


  create() {
    game.parent.setLevelData('if (x = 1) { return (deadlyWater) }')
    this.river = this.physics.add.group()
    this.aGrid = new AlignGrid({scene: this, cols: 30, rows: 20});
    createMap(0, 599, this, 'grass', 17)
    createObstacle(this, [23,53,83,113,143,173,203,204,205,206,207,208,209], 'environment', 1, this.river)

    this.puzzleArea = this.physics.add.sprite(100,100, 'environment', 8)
    this.puzzleArea.scale = 8

    this.text = this.add.text(90,40, 'X', {fill: '#000000'})
    this.text.scale = (2)

    this.barrel = this.physics.add.sprite(100,100, 'environment', 18)
    this.barrel.scale = 2
    this.barrel.body.pushable = true
    this.barrel.body.enable = true
    this.barrel.body.drag.y = 50
    this.barrel.body.drag.x = 50




    this.disciple = this.physics.add.sprite(400, 500, 'disciple', 0);
    this.player = this.physics.add.sprite(100, 551.5, 'characters', 35);
    this.goal = this.physics.add.sprite(900, 100, 'environment', 48);
    this.goal.scale = 3
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    this.physics.add.collider(this.player, this.barrel)
    this.physics.add.collider(this.barrel, this.puzzleArea, () => {
      this.solved = false
    })


    // this.physics.add.collider(this.player, this.disciple, function(){
    //   stopCurrentScene('SceneOne');
    //   startNewScene('SceneTwo');
    // })

    this.physics.add.collider(this.player, this.river, () => {
      stopCurrentScene('SceneOne');
      startNewScene('SceneOne');
    })

    this.physics.add.collider(this.player, this.goal, () => {
      console.log('you win')
    })

    this.anims.create({
      key: 'playerWalk',
      repeat: -1,
      frameRate: 8,
      frames: this.anims.generateFrameNames('characters', {
        start: 35,
        end: 40
      })
    });

    this.input.keyboard.on('keyup_D', function(event) {
      this.player.anims.stop()
      this.player.setVelocityX(0)
    }, this);

    this.input.keyboard.on('keyup_A', function(event) {
      this.player.anims.stop()
      this.player.setVelocityX(0)
    }, this);

    this.input.keyboard.on('keyup_W', function(event) {
      this.player.anims.stop()
      this.player.setVelocityY(0)
    }, this);

    this.input.keyboard.on('keyup_S', function(event) {
      this.player.anims.stop()
      this.player.setVelocityY(0)
    }, this);
  }






  update() {
    if(!Phaser.Geom.Intersects.RectangleToRectangle(this.barrel.getBounds(), this.puzzleArea.getBounds())) {
      this.river.clear(true)
    }

    if (this.key_A.isDown) {
      moveLeft('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_D.isDown) {
      moveRight('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_W.isDown) {
      moveUp('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_S.isDown) {
      moveDown('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.player.x < this.disciple.x) {
      this.disciple.flipX = true
    } else {
      this.disciple.flipX = false
    }

    if (!this.key_A.isDown && !this.key_D.isDown) {
      this.player.setVelocityX(0)
    }

    if (!this.key_W.isDown && !this.key_S.isDown) {
      this.player.setVelocityY(0)
    }

    if (!this.key_A.isDown && !this.key_D.isDown && !this.key_W.isDown && !this.key_S.isDown) this.player.anims.stop()
  }
}

export default SceneOne
