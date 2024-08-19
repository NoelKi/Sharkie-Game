class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 200;
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

  drawFrame(ctx) {
    ctx.beginPath();
    ctx.linewidth = "1";
    ctx.strokestyle = "blue";
    if (
      this instanceof Pufferfish ||
      this instanceof JellyFish ||
      this instanceof Barrier ||
      this instanceof Endboss
    ) {
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    } else if (this instanceof Character) {
      ctx.rect(this.x + 28, this.y + 110, this.width * 0.6, this.height * 0.2);
      ctx.stroke();
    }
  }
}
