class Barrier extends DynamicObject {
  width = 50;
  height = 100;
  speed = 0.4 + 0.3 * Math.random();
  constructor() {
    super().loadImage("img/3. Background/Barrier/3.png");
    this.x = Math.random() * 520 + 200;
    this.y = Math.random() * 380;
    this.animate();
    this.moveLeft(this.speed);
  }

  animate() {
    setInterval(() => {
      this.x -= 1;
    }, 1000 / 25);
  }
}
