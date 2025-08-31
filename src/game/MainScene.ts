import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        console.log('MainScene created');
        this.cameras.main.setBackgroundColor('#24252A');
    }
}