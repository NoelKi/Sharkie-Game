class ThrowableObject extends DynamicObject {
  IMAGE_BUBBLE = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];
  IMAGE_BUBBLE_POISON = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];
  width = 60;
  height = 60;
  speed_X = -3;
  constructor() {
    super();
    this.x = 300;
    this.y = 200;
    this.loadImage(this.IMAGE_BUBBLE);
    this.throw(300, 200);
    this.moveLeft(this.speed_X);
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    // this.speed_Y;
    this.applyGravity();
  }

  delete() {
    if (this.y == -100) {
      console.log("nase");
    }
  }
}
