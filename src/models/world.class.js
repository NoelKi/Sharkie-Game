class World {
  canvas;
  ctx;
  keyboard;
  character = new Character();
  level = level1;
  enemies = level1.enemies;
  barriers = level1.barriers;
  coins = level1.coins;
  lifebar = new Lifebar();
  coinbar = new Coinbar();
  poisonbar = new Poisonbar();
  camera_x = 0;
  backgroundObjects = level1.backgroundObjects;
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 100);
    // check collisions
    setInterval(() => {
      this.checkCollisions();
    }, 220);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let bubble = new ThrowableObject(
        this.character.x + 120,
        this.character.y + 100
      );
      this.throwableObjects.push(bubble);
    }
  }

  checkCollisions() {
    this.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.lifebar.setPercentage(this.character.energy);
      }
    });
    this.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.character.collect();
        this.coinbar.setPercentage(this.character.points);
      }
    });
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.throwableObjects);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.lifebar);
    this.addToMap(this.coinbar);
    this.addToMap(this.poisonbar);

    // recall draw
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  update() {}

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
}
