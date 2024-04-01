const h2Display = document.getElementById("main_h2");
const main_buttons = document.querySelectorAll(".main_buttons button ");
const resetButton = document.getElementById("blue_button2");
const delButton = document.getElementById("blue_button");
let number = 0;
h2Display.textContent = number;

resetButton.addEventListener("click", () => {
  h2Display.textContent = number;
  console.log("clicked");
});

delButton.addEventListener("click", () => {
  console.log("clicked");
  h2Display.textContent = h2Display.textContent.slice(0, -1);
});

// main_buttons.forEach((button) => {
//   console.log(button);
// });

const myRange = document.getElementById("myRange");
const top_Section = document.querySelector(".top_section");
const middle_section = document.querySelector(".middle_section");
const bottom_section = document.querySelector(".bottom_section");

const h3_calc = document.getElementById("h3_calc");
const THEME_div = document.querySelector(".THEME_div h4");

myRange.addEventListener("input", function () {
  if (myRange.value === "1") {
    // Change the background color of the body to red
    document.body.style.backgroundColor = "rgb(230, 230, 230)";
    top_Section.style.backgroundColor = "rgb(230, 230, 230)";
    middle_section.style.backgroundColor = "rgb(238, 238, 238)";
    bottom_section.style.backgroundColor = "rgba(210, 205, 205, 1)";
    h3_calc.style.color = "rgba(54, 54, 44, 1)";
    THEME_div.style.color = "rgba(54, 54, 44, 1)";
  } else {
    document.body.style.backgroundColor = "";
    top_Section.style.backgroundColor = "";
    middle_section.style.backgroundColor = "";
    bottom_section.style.backgroundColor = "";
    h3_calc.style.color = "";
    THEME_div.style.color = "";
  }
});
