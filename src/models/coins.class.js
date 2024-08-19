class Coins extends CollectableObjects {
  IMAGES = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];
  currentImages = 0;
  height = 30;
  width = 30;
  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.x = Math.random() * 300 + 600;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 700);
  }
}
