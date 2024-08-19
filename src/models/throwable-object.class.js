class ThrowableObject extends DynamicObject {
  IMAGE_BUBBLE = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];
  IMAGE_BUBBLE_POISON = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];
  width = 60;
  height = 60;
  speed_X = -3;

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage(this.IMAGE_BUBBLE);
    this.throw();
    this.moveLeft(this.speed_X);
  }

  throw() {
    this.applyGravity();
  }

  delete() {
    if (this.y == -100) {
      console.log("nase");
    }
  }
}
