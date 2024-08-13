let canvas;
let world;
let keyboard = new Keyboard();

window.onload = function () {
  init();
};

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);
}

window.addEventListener("keypress", (event) => {
  console.log(event);
});
