class Lifebar extends Statusbar {
  IMAGES_LIFE = [
    "img/4. Marcadores/green/Life/0_  copia 3.png",
    "img/4. Marcadores/green/Life/20_ copia 4.png",
    "img/4. Marcadores/green/Life/40_  copia 3.png",
    "img/4. Marcadores/green/Life/60_  copia 3.png",
    "img/4. Marcadores/green/Life/80_  copia 3.png",
    "img/4. Marcadores/green/Life/100_  copia 2.png",
  ];
  x = 10;
  y = 35;
  percentage = 100;

  constructor() {
    super().loadImage(this.IMAGES_LIFE[5]);
    this.loadImages(this.IMAGES_LIFE);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    const path = this.IMAGES_LIFE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
