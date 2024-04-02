const body = document.querySelector("body");
const myRange = document.getElementById("myRange");
const h2Display = document.getElementById("main_h2");
const main_buttons = document.querySelectorAll(".main_buttons button ");
const resetButton = document.getElementById("blue_button2");
const delButton = document.getElementById("blue_button");
const addNumber = document.getElementById("+");
const sum = document.getElementById("red_button");

myRange.addEventListener("input", function () {
  if (myRange.value === "1") {
    body.classList.add("level1");
  } else if (myRange.value === "2") {
    body.classList.remove("level1");
    body.classList.add("level2");
  } else {
    body.classList.remove("level1");
    body.classList.remove("level2");
  }
});

/* FIXME:RESET button hover needs to be fixed and classname logic should be checked again! */

//BUTTON LOGIC!
let firstInput;
resetButton.addEventListener("click", () => {
  h2Display.textContent = "";
});

delButton.addEventListener("click", () => {
  h2Display.textContent = h2Display.textContent.slice(0, -1);
});

main_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;
    if (!isNaN(parseFloat(buttonText)) || buttonText === ".") {
      h2Display.textContent += buttonText;
    }
  });
});
sum.addEventListener("click", function () {
  if (h2Display.textContent.length >= 2 && addNumber.textContent === "+") {
    const mainSplit = Number(h2Display.textContent) + Number(firstInput);
    h2Display.textContent = mainSplit;
  }
});

addNumber.addEventListener("click", function () {
  if (h2Display.textContent.length >= 2 && addNumber.textContent === "+") {
    firstInput = h2Display.textContent;
    h2Display.textContent = "";
  }
});
