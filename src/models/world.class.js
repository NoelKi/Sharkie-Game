class World {
  character = new Character();
  enemies = [new JellyFish(), new JellyFish()];
  canvas;
  barriers = [new Barrier()];
  backgroundObjects = [
    new BackgroundObjects("img/3. Background/Layers/5. Water/D.png", 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D.png", 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D.png", 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D.png", 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/COMPLETO.png", 0),
  ];
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.barriers);
    this.addToMap(this.character);

    // reuse draw
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
