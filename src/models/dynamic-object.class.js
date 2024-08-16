class DynamicObject extends DrawableObject {
  speed;
  speed_Y = 0;
  acceleration = 0.4;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y -= this.speed_Y;
        this.speed_Y -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 300;
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
      ctx.rect(this.x + 28, this.y + 95, this.width * 0.6, this.height * 0.3);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return (
      this.x + 28 + this.width * 0.6 > mo.x &&
      this.y + 95 + this.height * 0.3 > mo.y &&
      this.x + 28 < mo.x &&
      this.y + 95 < mo.y + mo.height
    );
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

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else this.lastHit = new Date().getTime();
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    if (timePassed < 500) {
      return true;
    } else {
      return false;
    }
  }
}
