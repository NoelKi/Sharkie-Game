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
  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_LONG_IDLE = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/i2.png",
    "img/1.Sharkie/2.Long_IDLE/i3.png",
    "img/1.Sharkie/2.Long_IDLE/i4.png",
    "img/1.Sharkie/2.Long_IDLE/i5.png",
    "img/1.Sharkie/2.Long_IDLE/i6.png",
    "img/1.Sharkie/2.Long_IDLE/i7.png",
    "img/1.Sharkie/2.Long_IDLE/i8.png",
    "img/1.Sharkie/2.Long_IDLE/i9.png",
    "img/1.Sharkie/2.Long_IDLE/i10.png",
    "img/1.Sharkie/2.Long_IDLE/i11.png",
    "img/1.Sharkie/2.Long_IDLE/i12.png",
    "img/1.Sharkie/2.Long_IDLE/i13.png",
    "img/1.Sharkie/2.Long_IDLE/i14.png",
    "img/1.Sharkie/2.Long_IDLE/i15.png",
    "img/1.Sharkie/2.Long_IDLE/i16.png",
  ];
  world;
  swimming_sound = new Audio("audio/under-water.mp3");

  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_IDLE);

    this.animate();
    // this.applyGravity();
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
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 220);
  }
}

// let i = this.currentImage % this.IMAGES_SWIMMING.length;
// let path = this.IMAGES_SWIMMING[i];
// this.img = this.imageCache[path];
// this.currentImage++;
