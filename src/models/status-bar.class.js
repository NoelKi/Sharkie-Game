class Statusbar extends DrawableObject {
  IMAGES_LIFE = [
    "img/4. Marcadores/green/Life/0_  copia 3.png",
    "img/4. Marcadores/green/Life/20_ copia 4.png",
    "img/4. Marcadores/green/Life/40_  copia 3.png",
    "img/4. Marcadores/green/Life/60_  copia 3.png",
    "img/4. Marcadores/green/Life/80_  copia 3.png",
    "img/4. Marcadores/green/Life/100_  copia 2.png",
  ];
  IMAGES_COIN = [
    "img/4. Marcadores/green/Coin/0_  copia 4.png",
    "img/4. Marcadores/green/Coin/20_  copia 2.png",
    "img/4. Marcadores/green/Coin/40_  copia 4.png",
    "img/4. Marcadores/green/Coin/60_  copia 4.png",
    "img/4. Marcadores/green/Coin/80_  copia 4.png",
    "img/4. Marcadores/green/Coin/100_  copia 4.png",
  ];

  percentage = 100;

  constructor() {
    super().loadImages(this.IMAGES_LIFE);
    this.loadImage(this.IMAGES_LIFE[5]);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    const path = this.IMAGES_LIFE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (percentage == 100) {
      return 5;
    } else if (percentage > 80) {
      return 4;
    } else if (percentage > 60) {
      return 3;
    } else if (percentage > 40) {
      return 2;
    } else if (percentage > 20) {
      return 1;
    } else return 0;
  }
}
