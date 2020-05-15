class bootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'bootScene'
        });
    }
    preload() {
      const progress = this.add.graphics();

        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });

        this.load.on('complete', () => {
            progress.destroy();
            this.scene.start('gameScene');
        });

        this.load.image("bg", '/assets/background.png');
        this.load.image("car", './assets/source.png');
        this.load.image("logo", './assets/logo.png');
        this.load.image("billboard", './assets/billboard.png');
        this.load.image("safeSign", './assets/safeSign.png');
        this.load.image("sirius", './assets/sirius.png');
        this.load.image("droid1", './assets/droid1.png');
        this.load.image("droid2", './assets/droid2.png');
    }
}

export default bootScene;
