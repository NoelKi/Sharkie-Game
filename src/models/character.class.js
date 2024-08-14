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
  constructor() {
    super().loadImage("img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  }
  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP) {
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN) {
        this.y += this.speed;
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.LEFT
      ) {
        // swimm animation
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = this.IMAGES_SWIMMING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 220);
  }
}
