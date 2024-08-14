class Endboss extends DynamicObject {
  height = 600;
  width = 400;

  IMAGES_SWIMMING = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.x = 400;
    this.y = -150;
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 200);
  }
}
