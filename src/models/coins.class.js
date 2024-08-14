class Coins extends DynamicObject {
  IMAGES = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];
  currentImages = 0;
  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.x = 400;
    this.y = -150;
    this.loadImages(this.IMAGES);
    this.animate();
  }
}
