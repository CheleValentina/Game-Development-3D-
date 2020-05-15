import 'phaser';
import bootScene from './scenes/bootScene';
import gameScene from './scenes/gameScene';

const config = {
    type: Phaser.WEBGL,
    parent: "phaser-runner",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1200,
    height: 600,
    pixelArt: true,
    antialias: true,
   roundPixels: true,
    scene: [
        bootScene,
        gameScene
    ]
};
const game = new Phaser.Game(config);
