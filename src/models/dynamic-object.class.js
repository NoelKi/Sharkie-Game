class DynamicObject extends DrawableObject {
  speed;
  speed_Y = 0;
  acceleration = -0.2;
  energy = 100;
  lastHit = 0;
  points = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y -= this.speed_Y;
        this.speed_Y -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    // return this.y < 300;
    return true;
  }

  isColliding(mo) {
    return (
      this.x + 28 + this.width * 0.6 > mo.x &&
      this.y + 110 + this.height * 0.2 > mo.y &&
      this.x + 28 < mo.x &&
      this.y + 110 < mo.y + mo.height
    );
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft(speed = 1) {
    setInterval(() => {
      this.x -= speed;
    }, 1000 / 25);
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

  collect() {
    this.points += 10;
    if (this.points > 100) {
      this.points = 100;
    }
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
