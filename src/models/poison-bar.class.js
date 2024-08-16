class Poisonbar extends Statusbar {
  IMAGES_POISON = [
    "img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
    "img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
    "img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
    "img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
    "img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
    "img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
  ];
  x = 10;
  y = -5;
  constructor() {
    super().loadImage(this.IMAGES_POISON[5]);
    this.loadImages(this.IMAGES_POISON);
  }
}
