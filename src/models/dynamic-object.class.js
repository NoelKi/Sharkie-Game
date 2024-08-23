class DynamicObject extends DrawableObject {
  speed;
  speed_Y = 0;
  acceleration = -0.2;
  energy = 100;
  lastHit = 0;
  lastHitFinalBoss = 0;
  lastAttack = 0;
  coinCounter = 0;
  poisonCounter = 0;
  died = false;
  thisSpawn = 0;

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

  isCollidingThrow(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  moveRight() {
    setInterval(() => {
      this.x += speed;
    }, 1000 / 25);
  }

  moveLeft(speed = 1) {
    setInterval(() => {
      this.x -= speed;
    }, 1000 / 25);
  }

  moveSomeLeft(speed = 1) {
    let stopper = 1;
    setInterval(() => {
      this.x -= speed * stopper;
    }, 1000 / 25);
    setInterval(() => {
      stopper = 0;
    }, 1000);
  }

  moveUpAndDown(speed = 1, duration = 1000) {
    let direction = 1;
    setInterval(() => {
      if (this.died == false) {
        this.y += speed * direction;
      }
    }, 1000 / 25);
    setInterval(() => {
      direction *= -1;
    }, duration);
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else this.lastHit = new Date().getTime();
  }

  superHit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else this.lastHit = new Date().getTime();
  }

  finalBossHit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else this.lastHitFinalBoss = new Date().getTime();
    console.log(this.lastHitFinalBoss);
  }

  attack() {
    this.lastAttack = new Date().getTime();
  }

  spawn() {
    this.thisSpawn = new Date().getTime();
  }

  collect() {
    this.coinCounter += 1;
    if (this.coinCounter > 100) {
      this.coinCounter = 100;
    }
  }

  collectPoison() {
    this.poisonCounter += 1;
    if (this.poisonCounter > 100) {
      this.poisonCounter = 100;
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

  isSpawn() {
    let timePassed = new Date().getTime() - this.thisSpawn;
    if (timePassed < 2000) {
      return true;
    } else {
      return false;
    }
  }

  isAttack() {
    let timePassed = new Date().getTime() - this.lastAttack;
    if (timePassed < 800) {
      return true;
    } else {
      return false;
    }
  }

  die() {
    this.died = true;
  }

  finalBossIsHurt() {
    let timePassed = new Date().getTime() - this.lastHitFinalBoss;
    if (timePassed < 2000) {
      return true;
    } else {
      return false;
    }
  }
}
