class JellyFish extends DynamicObject {
  height = 60;
  width = 60;

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = Math.random() * 300 + 200;
    this.y = Math.random() * 380;
  }
}
