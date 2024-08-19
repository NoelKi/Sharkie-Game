class JellyFish extends DynamicObject {
  height = 60;
  width = 60;
  speed = 0.6 * Math.random() + 1;
  IMAGES_SWIMMING = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_SUPERDANGER = [
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png",
    "img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png",
  ];
  IMAGES_DEAD_PURPLE = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];
  IMAGES_DEAD_PINK = [
    "img/2.Enemy/2 Jelly fish/Dead/Pink/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/L4.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = Math.random() * 2000 + 600;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
    // this.moveLeft(this.speed);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 180);
  }
}
