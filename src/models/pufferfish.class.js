class Pufferfish extends DynamicObject {
  height = 60;
  width = 60;
  speed = 0.6 * Math.random() + 1;
  IMAGES_SWIMMING = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];
  IMAGES_TRANSITION = [
    "src/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",
  ];
  IMAGES_BUBBLESWIM = [
    "src/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "src/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png",
  ];

  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.x = Math.random() * 300 + 200;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
    // this.moveLeft(this.speed);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 180);
  }
}
