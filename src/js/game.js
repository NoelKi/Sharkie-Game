let canvas;
let world;
let keyboard = new Keyboard();

window.onload = function () {
  // gameInstance();
  init();
};

function init() {
  createStartScreen();
  createBtnDiv();
  createStartBtn();
  createInstructions();
  createImpressumLink();
}

function gameInstance() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function startGame() {
  const startContainer = document.getElementById("start-section");
  startContainer.style.display = "none";
  let btnContainer = document.getElementById("btn-container");
  btnContainer.style.display = "none";
  let canvas = document.getElementById("canvas");
  canvas.style.display = "block";
  gameInstance();
}

function createStartScreen() {
  let canvas = document.getElementById("canvas");
  canvas.style.display = "none";

  let div = document.createElement("div");
  div.id = "start-section";
  div.className = "start-section";
  document.getElementsByTagName("body")[0].appendChild(div);
}

function createBtnDiv() {
  let container = document.createElement("div");
  container.id = "btn-container";
  container.className = "btn-container";
  document.getElementsByTagName("body")[0].appendChild(container);
}

function createStartBtn() {
  let container = document.createElement("div");
  container.id = "start-container";
  container.className = "start-container";
  document.getElementById("start-section").appendChild(container);

  let btn = document.createElement("img");
  btn.src = "img/6.Botones/Start/1.png";
  btn.id = "start-btn";
  btn.className = "start-btn";
  document.getElementById("start-container").appendChild(btn);

  btn.onclick = function () {
    startGame();
  };
}

function createInstructions() {
  let instruction = document.createElement("img");
  instruction.src = "img/6.Botones/Instructions 1.png";
  instruction.id = "instruction";
  instruction.className = "instruction";
  document.getElementById("btn-container").appendChild(instruction);
}

function createImpressumLink() {
  let a = document.createElement("a");
  a.className = "impressum-link";
  a.innerHTML = "Impressum";
  a.href = "impressum.html"; // Füge den Link zum Impressum hinzu
  document.getElementById("btn-container").appendChild(a);
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
  if (e.code == "Space") {
    keyboard.SPACE = true;
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
  if (e.code == "Space") {
    keyboard.SPACE = false;
  }
};
