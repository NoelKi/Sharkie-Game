class JellyFishSuper extends DynamicObject {
  height = 60;
  width = 60;
  speed_Y = 0;
  acceleration = -0.001;
  speed = 0.6 * Math.random() + 1;
  alternatingTime = 1000;
  speedVertical = 3;
  IMAGES_SWIMMING = [
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png",
  ];
  IMAGES_DEAD_PINK = [
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.x = Math.random() * 3400 + 600;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD_PINK);
    this.animate();
    // this.moveLeft(this.speed);
    this.moveUpAndDown(this.speedVertical, this.alternatingTime);
  }

  animate() {
    setInterval(() => {
      if (this.died == false) {
        this.playAnimation(this.IMAGES_SWIMMING);
      } else {
        this.playAnimation(this.IMAGES_DEAD_PINK);
        this.applyGravity();
      }
    }, 180);
  }
}
