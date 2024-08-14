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
  currentImage = 0;

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = Math.random() * 300 + 200;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
    this.moveLeft(this.speed);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 180);
  }
}
