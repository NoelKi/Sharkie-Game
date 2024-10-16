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
    // console.log(this.name);
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
      this instanceof JellyFishSuper ||
      this instanceof JellyFish ||
      this instanceof Barrier ||
      this instanceof Endboss ||
      this instanceof ThrowableObject
    ) {
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    } else if (this instanceof Character) {
      ctx.rect(this.x + 28, this.y + 110, this.width * 0.6, this.height * 0.2);
      ctx.stroke();
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playAnimationOnce(images) {
    let i = this.currentAttackImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentAttackImage++;
  }
}
