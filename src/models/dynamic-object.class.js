class DynamicObject {
  x = 100;
  y = 100;
  img;
  height = 250;
  width = 250;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft() {
    console.log("move left");
  }
}
