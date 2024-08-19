class Poison extends CollectableObjects {
  IMAGES_FLOATING = [
    "img/4. Marcadores/Posiขn/Animada/1.png",
    "img/4. Marcadores/Posiขn/Animada/2.png",
    "img/4. Marcadores/Posiขn/Animada/3.png",
    "img/4. Marcadores/Posiขn/Animada/4.png",
    "img/4. Marcadores/Posiขn/Animada/5.png",
    "img/4. Marcadores/Posiขn/Animada/6.png",
    "img/4. Marcadores/Posiขn/Animada/7.png",
    "img/4. Marcadores/Posiขn/Animada/8.png",
  ];
  IMAGES_BOTTOM = [
    "img/4. Marcadores/Posiขn/Dark - Left.png",
    "img/4. Marcadores/Posiขn/Dark - Right.png",
  ];
  currentImages = 0;
  height = 80;
  width = 60;
  constructor() {
    super().loadImage(this.IMAGES_BOTTOM[this.setRandomImage()]);
    this.x = Math.random() * 3000 + 600;
    this.y = Math.random() * 30 + 380;
    // this.animate()
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 700);
  }

  setRandomImage() {
    let index = Math.round(Math.random() * 1);
    return index;
  }
}
