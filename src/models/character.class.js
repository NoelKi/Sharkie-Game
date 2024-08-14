class Character extends DynamicObject {
  height = 200;
  currentImage = 0;
  speed = 8;
  otherDirection = false;
  IMAGES_SWIMMING = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  world;
  swimming_sound = new Audio("audio/under-water.mp3");

  constructor() {
    super().loadImage("img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  }
  animate() {
    setInterval(() => {
      // this.swimming_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEnd_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.swimming_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > 100) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swimming_sound.play();
      }
      if (this.world.keyboard.UP) {
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN) {
        this.y += this.speed;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.LEFT
      ) {
        // swimm animation
        this.playAnimation(this.IMAGES_SWIMMING);
      }
    }, 220);
  }
}

// let i = this.currentImage % this.IMAGES_SWIMMING.length;
// let path = this.IMAGES_SWIMMING[i];
// this.img = this.imageCache[path];
// this.currentImage++;
