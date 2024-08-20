class Character extends DynamicObject {
  height = 200;
  currentImage = 0;
  currentAttackImage = 0;
  speed = 8;
  otherDirection = false;
  lastKeyInteract = new Date().getTime();
  IMAGES_SWIMMING = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_DEAD_POISON = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_DEAD_ELECTRO = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    // "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];
  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_LONG_IDLE = [
    "img/1.Sharkie/2.Long_IDLE/I1.png",
    "img/1.Sharkie/2.Long_IDLE/I1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];
  IMAGES_HURT = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    // "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];
  IMAGES_ATTACK_BT = [
    // "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    // "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    // "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    // "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  IMAGES_ATTACK_FS = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    // "img/1.Sharkie/4.Attack/Fin slap/2.png",
    // "img/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];
  world;
  swimming_sound = new Audio("audio/under-water.mp3");
  sleeping_sound = new Audio("audio/sleeping.mp3");
  lastThrow = 0;
  constructor() {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD_POISON);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_ATTACK_BT);
    this.loadImages(this.IMAGES_ATTACK_FS);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_HURT);

    this.animate();
  }

  isThrowable() {
    let timePassed = new Date().getTime() - this.lastThrow;
    if (timePassed > 1000) {
      return true;
    } else {
      return false;
    }
  }

  animate() {
    setInterval(() => {
      this.moveCharacter();
      this.fixCameraPosition();
    }, 1000 / 60);
    setInterval(() => {
      this.showAnimations();
    }, 200);
    setInterval(() => {
      if (this.world.keyboard.D) {
        this.attack();
      }
      this.checkActivity();
    }, 50);
  }

  moveCharacter() {
    // this.swimming_sound.pause();
    if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEnd_x) {
      this.x += this.speed;
      this.otherDirection = false;
      // this.swimming_sound.play();
    }
    if (this.world.keyboard.LEFT && this.x > 200) {
      this.x -= this.speed;
      this.otherDirection = true;
      // this.swimming_sound.play();
    }
    if (this.world.keyboard.UP) {
      this.y -= this.speed;
    }
    if (this.world.keyboard.DOWN) {
      this.y += this.speed;
    }
  }

  showAnimations() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD_POISON);
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    } else if (this.isAttack()) {
      console.log(this.currentAttackImage % 4);
      this.playAnimationOnce(this.IMAGES_ATTACK_BT);
    } else if (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN ||
      this.world.keyboard.LEFT
    ) {
      this.playAnimation(this.IMAGES_SWIMMING);
      this.lastKeyInteract = new Date().getTime();
    } else if (this.inactive()) {
      this.playAnimation(this.IMAGES_LONG_IDLE);
      this.sleeping_sound.play();
    } else {
      this.playAnimation(this.IMAGES_IDLE);
    }
  }

  fixCameraPosition() {
    this.world.camera_x = -this.x + 200;
  }

  checkActivity() {
    if (Object.values(this.world.keyboard).some((value) => value === true)) {
      this.lastKeyInteract = new Date().getTime();
    }
  }

  playDead() {
    this.playAnimation(this.IMAGES_DEAD_POISON);
  }

  inactive() {
    let timePassed = new Date().getTime() - this.lastKeyInteract;
    if (timePassed > 10000) {
      return true;
    } else {
      return false;
    }
  }
}
