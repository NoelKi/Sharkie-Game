class BackgroundObjects extends DynamicObject {
  height = 480;
  width = 1220;
  constructor(path, x) {
    super().loadImage(path);
    this.x = x;
    this.y = 480 - this.height;
  }
}
