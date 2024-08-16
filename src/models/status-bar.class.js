class Statusbar extends DrawableObject {
  x = 0;
  y = 0;
  width = 200;
  height = 60;
  percentage = 100;

  constructor() {
    super();
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    console.log(this.resolveImageIndex());
    const path = this.IMAGES_LIFE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else return 0;
  }
}
