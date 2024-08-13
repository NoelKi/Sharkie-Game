let canvas;
const character = new Image();

window.onload = function () {
  init();
};

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  character.src = "../img/1.Sharkie/3.Swim/1.png";

  ctx.drawImage(character, 20, 20, 50, 150);
}
