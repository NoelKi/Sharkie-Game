let canvas;
let world;

window.onload = function () {
  init();
};

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);

  console.log(world.character);
}
