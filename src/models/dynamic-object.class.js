class DynamicObject {
  x = 100;
  y = 100;
  img;
  height = 150;
  width = 150;
  imageCache = {};
  speed;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * @param (Array) arr - [img/image1.png,img/image2.png,img/image3.png]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft(speed = 1) {
    setInterval(() => {
      this.x -= speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
