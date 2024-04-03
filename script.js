const body = document.querySelector("body");
const myRange = document.getElementById("myRange");
const h2Display = document.getElementById("main_h2");
const main_buttons = document.querySelectorAll(".main_buttons button ");
const resetButton = document.getElementById("blue_button2");
const delButton = document.getElementById("blue_button");
const sumNumber = document.getElementById("+");
const Equality = document.getElementById("red_button");
const Subtract = document.getElementById("-");
const Divide = document.getElementById("/");
const Multiply = document.getElementById("x");
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

let firstInput;
let secondInput;
let thirdInput;
let forthInput;
let selectedOperation = "";
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
// TODO:  შეკრების და გატოლების ლოგიკა
Equality.addEventListener("click", function () {
  if (selectedOperation === "+") {
    const mainSplit = Number(h2Display.textContent) + Number(firstInput);
    console.log(mainSplit);
    h2Display.textContent = mainSplit;
  } // TODO:  გამოკლების და გატოლების ლოგიკა
  else if (selectedOperation === "-") {
    const mainSplit2 = Number(secondInput) - Number(h2Display.textContent);
    console.log(mainSplit2);
    h2Display.textContent = mainSplit2;
  }
  // TODO:  გამრავლების  ლოგიკა და გატოლების ლოგიკა
  else if (
    (selectedOperation === "*" && thirdInput.textContent === "0") ||
    (selectedOperation === "*" && h2Display.textContent === "0")
  ) {
    h2Display.textContent = "";
    setTimeout(() => {
      h2Display.textContent = "0";
    }, 200);
  } else if (selectedOperation === "*") {
    const mainSplit3 = Number(thirdInput) * Number(h2Display.textContent);
    h2Display.textContent = mainSplit3;
  }
  // TODO:  გაყოფის   ლოგიკა და გატოლების ლოგიკა
  else if (
    (selectedOperation === "/" && forthInput.textContent === "0") ||
    (selectedOperation === "/" && h2Display.textContent === "0")
  ) {
    h2Display.textContent = "";
    setTimeout(() => {
      h2Display.textContent = "0";
    }, 200);
  } else if (selectedOperation === "/") {
    const mainSplit4 = Number(forthInput) / Number(h2Display.textContent);
    h2Display.textContent = mainSplit4;
  }
});

// TODO:  შეკრების  ლოგიკა

sumNumber.addEventListener("click", function () {
  selectedOperation = "+";
  firstInput = h2Display.textContent;
  h2Display.textContent = "";
});

// TODO:  გამოკლების  ლოგიკა

Subtract.addEventListener("click", function () {
  selectedOperation = "-";
  secondInput = h2Display.textContent;
  h2Display.textContent = "";
});

// TODO:  გამრავლების  ლოგიკა

Multiply.addEventListener("click", function () {
  selectedOperation = "*";
  thirdInput = h2Display.textContent;
  h2Display.textContent = "";
});

// TODO:  გაყოფის   ლოგიკა

Divide.addEventListener("click", function () {
  selectedOperation = "/";
  forthInput = h2Display.textContent;
  console.log(typeof forthInput);
  h2Display.textContent = "";
});
