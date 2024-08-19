class Poison extends CollectableObjects {
  IMAGES = [
    "img/4. Marcadores/Posiขn/Animada/1.png",
    "img/4. Marcadores/Posiขn/Animada/2.png",
    "img/4. Marcadores/Posiขn/Animada/3.png",
    "img/4. Marcadores/Posiขn/Animada/4.png",
    "img/4. Marcadores/Posiขn/Animada/5.png",
    "img/4. Marcadores/Posiขn/Animada/6.png",
    "img/4. Marcadores/Posiขn/Animada/7.png",
    "img/4. Marcadores/Posiขn/Animada/8.png",
  ];
  IMAGE_LEFT = ["img/4. Marcadores/Posiขn/Dark - Left.png"];
  IMAGE_RIGHT = ["img/4. Marcadores/Posiขn/Dark - Right.png"];
  currentImages = 0;
  height = 30;
  width = 30;
  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.x = Math.random() * 300 + 600;
    this.y = Math.random() * 380;
    this.loadImages(this.IMAGES);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 700);
  }
}
