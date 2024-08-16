class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 100;
  height = 150;
  width = 150;

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

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
}
