class World {
  canvas;
  ctx;
  keyboard;
  character = new Character();
  level = level1;
  enemies = level1.enemies;
  barriers = level1.barriers;
  coins = level1.coins;
  poisons = level1.poisons;
  lifebar = new Lifebar();
  coinbar = new Coinbar();
  poisonbar = new Poisonbar();
  camera_x = 0;
  backgroundObjects = level1.backgroundObjects;
  throwableObjects = [];
  lastThrow = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.drawWorld();
    this.setWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkThrowObjects();
      this.checkEnemieCollisions();
      this.checkBarrierCollisions();
      this.checkCoinCollisions();
      this.checkPoisonCollisions();
      this.checkBubbleCollision();
    }, 100);
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.isThrowable()) {
      if (true) {
        // replace true with : this.character.poisonCounter > 0
        this.lastThrow = new Date().getTime();
        setTimeout(() => {
          let bubble = new ThrowableObject(
            this.character.x + 120,
            this.character.y + 100
          );
          this.throwableObjects.push(bubble);
          this.character.poisonCounter -= 1;
        }, 600);
      }
    }
  }

  isThrowable() {
    let timePassed = new Date().getTime() - this.lastThrow;
    if (timePassed > 800) {
      return true;
    } else {
      return false;
    }
  }

  checkEnemieCollisions() {
    this.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy.died == false) {
          if (enemy instanceof JellyFishSuper) {
            this.character.superHit();
          } else {
            this.character.hit();
          }
          this.lifebar.setPercentage(this.character.energy);
        }
      }
    });
  }

  checkBarrierCollisions() {
    this.barriers.forEach((barrier) => {
      if (this.character.isColliding(barrier)) {
        this.character.hit();
        this.lifebar.setPercentage(this.character.energy);
      }
    });
  }

  checkCoinCollisions() {
    this.level.coins = this.level.coins.filter((coin) => {
      if (this.character.isColliding(coin)) {
        this.character.collect();
        this.coinbar.setPercentage(this.character.coinCounter);
        return false; // Remove the coin from the array
      }
      return true; // Keep the coin in the array
    });
  }

  checkBubbleCollision() {
    if (this.throwableObjects.length > 0) {
      this.enemies.forEach((enemy) => {
        // Filtere die throwableObjects und behalte nur die, die keine Kollision haben
        this.throwableObjects = this.throwableObjects.filter(
          (throwableObject) => {
            if (throwableObject.isCollidingThrow(enemy)) {
              if (
                enemy instanceof JellyFish ||
                enemy instanceof JellyFishSuper
              ) {
                enemy.die();
              } else if (enemy instanceof Endboss) {
                enemy.finalBossHit();
                console.log("hit final");
              }
              return false; // Entferne das Objekt aus dem Array
            }
            return true; // Behalte das Objekt im Array
          }
        );
      });
    }
  }

  checkPoisonCollisions() {
    this.level.poisons = this.level.poisons.filter((poison) => {
      if (this.character.isColliding(poison)) {
        this.character.collectPoison();
        this.poisonbar.setPercentage(this.character.poisonCounter);
        return false; // Remove the coin from the array
      }
      return true; // Keep the coin in the array
    });
  }

  setWorld() {
    this.character.world = this;
  }

  drawWorld() {
    this.clearCanvas();

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poisons);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.lifebar);
    this.addToMap(this.coinbar);
    this.addToMap(this.poisonbar);

    // recall draw
    let self = this;
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
  }
}
