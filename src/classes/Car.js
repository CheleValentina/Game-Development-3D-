export default class Car extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.add.existing(this);
    this.speed = 0;
    this.maxSpeed = config.scene.segmentLength/2.5;
    this.accel = 1;
    this.breaking = 5;
    this.decel = 2.2;
    this.setScale(2);
    this.x = this.scene.renderSettings.width / 2;
    this.y = this.scene.renderSettings.height - this.height - 50;

  }

  accelerate(){
    if(this.y >= (this.startY + 1) || this.y <= ( this.startY - 1)) {
      this.y = this.startY;
    }
    else {
      this.y += Phaser.Math.Between(-1, 1);
    }
    if(this.speed < this.maxSpeed){
      this.speed += this.accel;
    }
  }

  decelerate(){
    if(this.speed > 0)
      this.speed -= this.decel;
    else
      this.speed = 0;
  }

  break(){
    if(this.speed > 0)
      this.speed -= this.breaking;
    else
      this.speed = 0;
  }
}
