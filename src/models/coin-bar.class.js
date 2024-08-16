class Coinbar extends Statusbar {
  IMAGES_COIN = [
    "img/4. Marcadores/green/Coin/0_  copia 4.png",
    "img/4. Marcadores/green/Coin/20_  copia 2.png",
    "img/4. Marcadores/green/Coin/40_  copia 4.png",
    "img/4. Marcadores/green/Coin/60_  copia 4.png",
    "img/4. Marcadores/green/Coin/80_  copia 4.png",
    "img/4. Marcadores/green/Coin/100_ copia 4.png",
  ];
  x = 10;
  y = 75;
  percentage = 100;

  constructor() {
    super().loadImage(this.IMAGES_COIN[5]);
    this.loadImages(this.IMAGES_COIN);
  }
}
