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
  let bottomLinks = document.getElementsByClassName("bottom-link");
  for (let i = 0; i < bottomLinks.length; i++) {
    bottomLinks[i].classList.add("d-none");
  }
  refillBottomContainer();
  let canvas = document.getElementById("canvas");
  canvas.style.display = "block";
  gameInstance();
}

function showGameBtn() {
  const bottomContainer = document.getElementById("bottom-container");
  if (!bottomContainer.querySelector(".game-btn")) {
    const gameBtn = document.createElement("img");
    gameBtn.className = "game-btn";
    gameBtn.id = "game-btn";
    gameBtn.src = "img/6.Botones/Key/arrow keys.png";
    bottomContainer.appendChild(gameBtn);
    addEventListenerGameBtn();
  }
}

function showAttackBtn() {
  const bottomContainer = document.getElementById("bottom-container");
  if (!bottomContainer.querySelector(".attack-btn")) {
    const gameBtn = document.createElement("img");
    gameBtn.className = "attack-btn";
    gameBtn.id = "attack-btn";
    gameBtn.src = "img/6.Botones/Key/D key.png";
    bottomContainer.appendChild(gameBtn);
    addEventListenerAttackBtn();
  }
}

function refillBottomContainer() {
  showGameBtn();
  showFullScreenBtn();
  showAttackBtn();
}

function showFullScreenBtn() {
  const bottomContainer = document.getElementById("bottom-container");
  if (!bottomContainer.querySelector(".bottom-btn")) {
    const fullScreenBtn = document.createElement("img");
    fullScreenBtn.className = "bottom-btn";
    fullScreenBtn.src = "img/6.Botones/Full Screen/Mesa de trabajo 8.png";
    fullScreenBtn.onclick = function () {
      fullScreen();
    };
    bottomContainer.appendChild(fullScreenBtn);
  }
}

function fullScreen() {
  canvas = document.getElementById("canvas");
  canvas.classList.add("fullscreen");
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
  for (let i = 1; i < 52; i++) window.clearInterval(i);
}

// function setStoppableInterval(fn, time) {
//   let intervalId = setInterval(fn, time);
//   intervalIds.push(intervalId);
// }

// function clearIntervalsStoppable() {
//   for (let i = 0; i < intervalIds.length; i++) {
//     const id = intervalIds[i];
//     clearIntervals(id);
//   }
// }

// let a = setInterval(() => {
//   console.log("a");
// }, 1000);

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

function addEventListenerAttackBtn() {
  document.getElementById("attack-btn").addEventListener("click", function () {
    keyboard.D = true;
    setTimeout(() => {
      keyboard.D = false;
    }, 200);
  });
}

function addEventListenerGameBtn() {
  const imageMap = document.createElement("map");
  imageMap.name = "dynamic-map";

  const leftBtn = document.createElement("area"); // Korrigiere dies zu <area>
  leftBtn.shape = "rect"; // Form des Bereichs
  leftBtn.coords = "0,52,52,100"; // Koordinaten des Rechtecks
  leftBtn.alt = "Clickable leftBtn"; // Alternativtext

  const rightBtn = document.createElement("area"); // Korrigiere dies zu <area>
  rightBtn.shape = "rect"; // Form des Bereichs
  rightBtn.coords = "110,50,160,100"; // Koordinaten des Rechtecks
  rightBtn.alt = "Clickable rightBtn"; // Alternativtext

  const upBtn = document.createElement("area"); // Korrigiere dies zu <area>
  upBtn.shape = "rect"; // Form des Bereichs
  upBtn.coords = "54,0,100,52"; // Koordinaten des Rechtecks
  upBtn.alt = "Clickable upBtn"; // Alternativtext

  const downBtn = document.createElement("area"); // Korrigiere dies zu <area>
  downBtn.shape = "rect"; // Form des Bereichs
  downBtn.coords = "54,54,106,100"; // Koordinaten des Rechtecks
  downBtn.alt = "Clickable downBtn"; // Alternativtext

  // EventListener für den linken Button
  leftBtn.addEventListener("mousedown", function () {
    keyboard.LEFT = true; // 'LEFT' für nach links bewegen
  });
  leftBtn.addEventListener("mouseup", function () {
    keyboard.LEFT = false; // Stoppt die Bewegung nach links
  });
  leftBtn.addEventListener("mouseleave", function () {
    keyboard.LEFT = false; // Stoppt die Bewegung, wenn der Cursor das Feld verlässt
  });

  // EventListener für den rechten Button
  rightBtn.addEventListener("mousedown", function () {
    keyboard.RIGHT = true; // 'RIGHT' für nach rechts bewegen
  });
  rightBtn.addEventListener("mouseup", function () {
    keyboard.RIGHT = false; // Stoppt die Bewegung nach rechts
  });
  rightBtn.addEventListener("mouseleave", function () {
    keyboard.RIGHT = false; // Stoppt die Bewegung, wenn der Cursor das Feld verlässt
  });

  // EventListener für den oberen Button
  upBtn.addEventListener("mousedown", function () {
    keyboard.UP = true; // 'UP' für nach oben bewegen
  });
  upBtn.addEventListener("mouseup", function () {
    keyboard.UP = false; // Stoppt die Bewegung nach oben
  });
  upBtn.addEventListener("mouseleave", function () {
    keyboard.UP = false; // Stoppt die Bewegung, wenn der Cursor das Feld verlässt
  });

  // EventListener für den unteren Button
  downBtn.addEventListener("mousedown", function () {
    keyboard.DOWN = true; // 'DOWN' für nach unten bewegen
  });
  downBtn.addEventListener("mouseup", function () {
    keyboard.DOWN = false; // Stoppt die Bewegung nach unten
  });
  downBtn.addEventListener("mouseleave", function () {
    keyboard.DOWN = false; // Stoppt die Bewegung, wenn der Cursor das Feld verlässt
  });

  // Füge das Area zur Map hinzu
  imageMap.appendChild(leftBtn);
  imageMap.appendChild(leftBtn);
  imageMap.appendChild(rightBtn);
  imageMap.appendChild(upBtn);
  imageMap.appendChild(downBtn);

  // Füge die Map zum Body (oder einem anderen Container) hinzu
  document.getElementById("game-btn").useMap = "#dynamic-map"; // Verknüpfe die Map mit dem Bild
  document.body.appendChild(imageMap); // Füge die Map zum Body hinzu oder in einen anderen Container
}
