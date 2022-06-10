const grid = document.querySelector(".grid");
const userInput = document.getElementById("size");
const resetButton = document.querySelector(".reset");
const gridButton = document.querySelector(".enter");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div2");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div2");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

const square = document.querySelector("div2");
square.addEventListener("mouseover", function (event) {
  event.target.classList.replace("square", "color");
});


userInput.addEventListener("change", updateGrid);

gridButton.addEventListener("click", updateGrid);

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();

/*function paintBainBow(){

    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    
    let b = Math.floor(Math.random() * 256);

    return `rgba(${r},${g},${b},1)`;*/
