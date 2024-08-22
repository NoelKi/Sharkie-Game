class JellyFish extends DynamicObject {
  height = 60;
  width = 60;
  speed_Y = 0;
  acceleration = -0.002;
  speed = 0.6 * Math.random() + 1;
  alternatingTime = 1000;
  speedVertical = 3;
  IMAGES_SWIMMING = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_DEAD_PURPLE = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = Math.random() * 3400 + 600;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD_PURPLE);
    this.animate();
    // this.moveLeft(this.speed);
    this.moveUpAndDown(this.speedVertical, this.alternatingTime);
  }

  animate() {
    setInterval(() => {
      if (this.died == false) {
        this.playAnimation(this.IMAGES_SWIMMING);
      } else {
        this.playAnimation(this.IMAGES_DEAD_PURPLE);
        this.applyGravity();
      }
    }, 180);
  }
}
