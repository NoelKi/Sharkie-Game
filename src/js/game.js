let canvas;
let ctx;
let character = new MovableObject();

window.onload = function () {
  init();
};

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  console.log(character);
}
