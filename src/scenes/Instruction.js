class InstructionScene extends Phaser.Scene {
    constructor() {
        super('instructionScene');
        this.musicPlayed = false; // Track if music has already been played
    }

    create() {
        // Display the instructions image (make sure it's preloaded)
        let instructionScreen = this.add.sprite(0, 0, 'instruction').setOrigin(0, 0);

        // Add background music
        this.bgMusic = this.sound.add('music', { volume: 0.1, loop: true });

        // Play the music if not already playing
        if (!this.musicPlayed) {
            this.bgMusic.play();
            this.musicPlayed = true; // Prevent replaying music on re-entry
        }

        // Define input keys to transition to the Play Scene
        this.keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // Add some text to guide the player
        this.add.text(this.scale.width / 2, this.scale.height - 50, 'Press ENTER or E to Start', {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#FFFFFF',
            align: 'center',
        }).setOrigin(0.5);
    }

    update() {
        // Check if the player presses ENTER or E to start the game
        if (Phaser.Input.Keyboard.JustDown(this.keyENTER) || Phaser.Input.Keyboard.JustDown(this.keyE)) {
            // Stop the music
            if (this.bgMusic.isPlaying) {
                this.bgMusic.stop();
            }

            // Play a sound effect
            this.sound.play('beep', { volume: 0.5 });

            // Transition to the Play Scene
            this.scene.start('playScene');

            // Set global game settings (optional)
            game.settings = {
                busSpeed: 3,
            };
        }
    }
}

