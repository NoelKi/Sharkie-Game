class Barrier extends DynamicObject {
  width = 50;
  height = 100;
  speed = 0.4 + 0.3 * Math.random();
  constructor() {
    super().loadImage("img/3. Background/Barrier/3.png");
    this.x = Math.random() * 2800 + 500;
    this.y = Math.random() * 380;
    // this.moveLeft(this.speed);
  }
}
