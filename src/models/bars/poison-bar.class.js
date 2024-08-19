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
  percentage = 0;

  constructor() {
    super().loadImage(this.IMAGES_POISON[0]);
    this.loadImages(this.IMAGES_POISON);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    const path = this.IMAGES_POISON[this.resolveImageIndexCollectable()];
    this.img = this.imageCache[path];
    console.log(percentage);
  }
}
