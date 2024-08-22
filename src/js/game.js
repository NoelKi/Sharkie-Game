let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

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
  createInstructionsLink();
}

function gameInstance() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function startGame() {
  const startContainer = document.getElementById("overlay-section");
  startContainer.style.display = "none";
  let btnContainer = document.getElementById("bottom-container");
  btnContainer.style.display = "none";
  let canvas = document.getElementById("canvas");
  canvas.style.display = "block";
  gameInstance();
}

function createStartScreen() {
  let canvas = document.getElementById("canvas");
  canvas.style.display = "none";

  let div = document.createElement("div");
  div.id = "overlay-section";
  div.className = "overlay-section";
  document.getElementsByTagName("body")[0].appendChild(div);
}

function createBtnDiv() {
  let container = document.createElement("div");
  container.id = "bottom-container";
  container.className = "bottom-container";
  document.getElementsByTagName("body")[0].appendChild(container);
}

function createStartBtn() {
  let container = document.createElement("div");
  container.id = "btn-container";
  container.className = "btn-container";
  document.getElementById("overlay-section").appendChild(container);

  let btn = document.createElement("img");
  btn.src = "img/6.Botones/Start/1.png";
  btn.id = "start-btn";
  btn.className = "start-btn";
  document.getElementById("btn-container").appendChild(btn);

  btn.onclick = function () {
    startGame();
  };
}

function createInstructions() {
  let instruction = document.createElement("img");
  instruction.src = "img/6.Botones/Instructions 1.png";
  instruction.id = "instruction";
  instruction.className = "instruction";
  document.getElementById("bottom-container").appendChild(instruction);
}

function createImpressumLink() {
  let a = document.createElement("a");
  a.className = "bottom-link";
  a.innerHTML = "Impressum";
  a.href = "impressum.html";
  document.getElementById("bottom-container").appendChild(a);
}

function createInstructionsLink() {
  console.log("hallo");
  let a = document.createElement("a");
  a.className = "bottom-link";
  a.innerHTML = "Instructions";
  a.href = "instructions.html";
  document.getElementById("bottom-container").appendChild(a);
}

function createGameOverScreen() {
  stopGame();
  let canvas = document.getElementById("canvas");
  canvas.style.display = "none";
  const startContainer = document.getElementById("overlay-section");
  startContainer.style.display = "flex";
  let btnContainer = document.getElementById("bottom-container");
  btnContainer.style.display = "flex";
  let btn = document.getElementById("start-btn");
  btn.src = "img/6.Botones/Try again/Recurso 15.png";
}

function stopGame() {
  clearIntervals();
}

function clearIntervals() {
  for (let i = 1; i < 100; i++) window.clearInterval(i);
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
