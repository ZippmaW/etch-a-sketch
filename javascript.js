"use strict";

const container = document.createElement("div");
const bodyContainer = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Change Grid";
btn.className = "btn1";
btn.style.width = "20rem";
btn.style.height = "5rem";
btn.style.marginLeft = "325px";
bodyContainer.className = "body-container";
container.className = "container";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.margin = "5rem 5rem 2.5rem 5rem";
container.style.width = "80rem";
container.style.height = "80rem";

createGrid(16);
document.body.appendChild(bodyContainer);
document.body.appendChild(btn);
bodyContainer.appendChild(container);
squareColor();

btn.addEventListener("click", function (e) {
  e.value = prompt();
  if (e.value > 100) {
    alert("The value should not be more than 100");
  } else {
    container.innerHTML = "";
    bodyContainer.removeChild(container);
    createGrid(e.value);
    bodyContainer.appendChild(container);
    squareColor();
  }
});

function brightness(value) {
  if (value > 0) {
    const newBright = value - 0.1;
    return `brightness(${newBright})`;
  }
}

function randomRGB() {
  const r = Math.floor(Math.random() * 255 + 1).toString();
  const g = Math.floor(Math.random() * 255 + 1).toString();
  const b = Math.floor(Math.random() * 255 + 1).toString();
  /* let rgb = `rgb(${r}, ${g}, ${b})`; */
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(number) {
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    const dimensions = 800 / number;
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.fontSize = "2rem";
    div.style.backgroundColor = "black";
    div.style.filter = "brightness(1.0)";
    div.className = "square";
    div.style.width = `${dimensions}px`;
    div.style.height = `${dimensions}px`;
    container.appendChild(div);
  }
}

function squareColor() {
  const squares = Array.from(document.querySelectorAll(".square"));
  squares.forEach(function (square) {
    square.addEventListener("mouseover", function () {
      const colorCheck = square.style.backgroundColor; // Agane Y no function
      const colorBrightness = Number(square.style.filter.slice(11, -1));
      const funcBright = brightness(colorBrightness);
      if (!(colorCheck === "black")) {
        const finalBright = funcBright;
        square.style.filter = finalBright;
      } else {
        const getRBG = randomRGB(); // Y no only function
        square.style.backgroundColor = getRBG;
      }
    });
  });
}
