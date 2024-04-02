const body = document.querySelector("body");

const myRange = document.getElementById("myRange");
const top_Section = document.querySelector(".top_section");
const middle_section = document.querySelector(".middle_section");
const bottom_section = document.querySelector(".bottom_section");

const h3_calc = document.getElementById("h3_calc");
const THEME_div = document.querySelector(".THEME_div h4");
const THEME_filter = document.querySelector(".THEME_filter output ");
const THEME_filter2 = document.querySelector(".THEME_filter input");
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
const h2Display = document.getElementById("main_h2");
const main_buttons = document.querySelectorAll(".main_buttons button ");
const resetButton = document.getElementById("blue_button2");
const delButton = document.getElementById("blue_button");
// let number = 0;
// let convert = Number((h2Display.textContent = number));
resetButton.addEventListener("click", () => {
  h2Display.textContent = 0;
});

delButton.addEventListener("click", () => {
  h2Display.textContent = h2Display.textContent.slice(0, -1);
});

const buttons = main_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "7") {
      h2Display.textContent = Number(h2Display.textContent + 7);
    } else if (button.textContent === "8") {
      h2Display.textContent = Number(h2Display.textContent + 8);
    } else if (button.textContent === "9") {
      h2Display.textContent = Number(h2Display.textContent + 9);
    } else if (button.textContent === "4") {
      h2Display.textContent = Number(h2Display.textContent + 4);
    } else if (button.textContent === "5") {
      h2Display.textContent = Number(h2Display.textContent + 5);
    } else if (button.textContent === "6") {
      h2Display.textContent = Number(h2Display.textContent + 6);
    } else if (button.textContent === "1") {
      h2Display.textContent = Number(h2Display.textContent + 1);
    } else if (button.textContent === "2") {
      h2Display.textContent = Number(h2Display.textContent + 2);
    } else if (button.textContent === "3") {
      h2Display.textContent = Number(h2Display.textContent + 3);
    } else if (button.textContent === "0") {
      h2Display.textContent = Number(h2Display.textContent + 0);
    }
  });
  console.log(button);
});
