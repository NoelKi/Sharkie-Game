class World {
  character = new Character();
  enemies = new JellyFish();
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");

    this.draw();
  }

  draw() {
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.width,
      this.height
    );
    console.log("hallo");
  }
}
