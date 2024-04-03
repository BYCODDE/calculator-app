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
console.log(Subtract, Divide, Multiply);
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
Equality.addEventListener("click", function () {
  if (sumNumber.textContent === "+") {
    const mainSplit = Number(h2Display.textContent) + Number(firstInput);
    console.log(mainSplit);
    h2Display.textContent = mainSplit;
  }
});

sumNumber.addEventListener("click", function () {
  if (sumNumber.textContent === "+") {
    firstInput = h2Display.textContent;
    h2Display.textContent = "";
  }
});

// TODO: ორზე მეტი,რომ არის მარტო მაშინ მუშაობს შეკრება და დანარჩენი ვერ გავაკეთე თავიდან არის გასანაალიზებელი!
