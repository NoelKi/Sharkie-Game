class Statusbar extends DrawableObject {
  x = 0;
  y = 0;
  width = 200;
  height = 60;

  constructor() {
    super();
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

  resolveImageIndexCollectable() {
    if (this.percentage == 10) {
      return 5;
    } else if (this.percentage > 7) {
      return 4;
    } else if (this.percentage > 5) {
      return 3;
    } else if (this.percentage > 3) {
      return 2;
    } else if (this.percentage > 1) {
      return 1;
    } else return 0;
  }
}
