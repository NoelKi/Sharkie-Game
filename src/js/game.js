let canvas;
let world;
let keyboard = new Keyboard();

window.onload = function () {
  init();
};

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

document.onkeydown = function (e) {
  if (e.code == "KeyD") {
    keyboard.D = true;
  }
  if (e.code == "ArrowLeft") {
    keyboard.LEFT = true;
  }
  if (e.code == "ArrowUp") {
    keyboard.UP = true;
  }
  if (e.code == "ArrowRight") {
    keyboard.RIGHT = true;
  }
  if (e.code == "ArrowDown") {
    keyboard.DOWN = true;
  }
};

document.onkeyup = function (e) {
  if (e.code == "KeyD") {
    keyboard.D = false;
  }
  if (e.code == "ArrowLeft") {
    keyboard.LEFT = false;
  }
  if (e.code == "ArrowUp") {
    keyboard.UP = false;
  }
  if (e.code == "ArrowRight") {
    keyboard.RIGHT = false;
  }
  if (e.code == "ArrowDown") {
    keyboard.DOWN = false;
  }
};
