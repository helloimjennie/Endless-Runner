class gameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene')
    }

    create() {
        // add game over screen
        let gameOverScreen = this.add.sprite(0, 0, 'gameover').setOrigin(0, 0)

        // game over config
        let ggConfig = {
            fontFamily: 'Courier',
            fontSize: '40px',
            color: '#FFFFFF',
            align: 'center'
        }
        // text
        //this.add.text(game.config.width/-50, -50, 'Press D to restart, or A for credits, to Restart press D', ggConfig).setOrigin(0.5)

        // define keys
        this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)

    }

    update() {
        // M for menu
        if (Phaser.Input.Keyboard.JustDown(this.keyM)) {
            this.scene.start('menuScene')
            this.sound.play('beep')
        }

        // R to restart
        if (Phaser.Input.Keyboard.JustDown(this.keyR)) {
            this.scene.start('playScene')
            this.sound.play('beep')
        }

        // C to credits
        if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
            this.scene.start('creditsScene')
            this.sound.play('yay')
        }
    }
}