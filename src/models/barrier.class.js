class Barrier extends DynamicObject {
  width = 50;
  height = 100;
  constructor() {
    super().loadImage("img/3. Background/Barrier/3.png");
    this.x = Math.random() * 520 + 200;
    this.y = Math.random() * 380;
  }
}
