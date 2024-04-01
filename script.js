const h2Display = document.getElementById("main_h2");
const main_buttons = document.querySelectorAll(".main_buttons button ");
const resetButton = document.getElementById("blue_button2");
const delButton = document.getElementById("blue_button");
let number = 0;
h2Display.textContent = number;
const buttons = main_buttons.forEach((button) => {});

resetButton.addEventListener("click", () => {
  h2Display.textContent = number;
  console.log("clicked");
});

delButton.addEventListener("click", () => {
  console.log("clicked");
  h2Display.textContent = h2Display.textContent.slice(0, -1);
});

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
    document.body.style.backgroundColor = "rgb(230, 230, 230)";
    top_Section.style.backgroundColor = "rgb(230, 230, 230)";
    middle_section.style.backgroundColor = "rgb(238, 238, 238)";
    bottom_section.style.backgroundColor = "rgba(210, 205, 205, 1)";
    h3_calc.style.color = "rgba(54, 54, 44, 1)";
    THEME_div.style.color = "rgba(54, 54, 44, 1)";
    THEME_filter.style.color = "rgba(54, 54, 44, 1)";
    THEME_filter2.style.backgroundColor = "rgba(210, 205, 205, 1)";
    h2Display.style.color = "rgba(54, 54, 44, 1)";
    buttons.style.color = "rgba(54, 54, 44, 1)";
  } else {
    document.body.style.backgroundColor = "";
    top_Section.style.backgroundColor = "";
    middle_section.style.backgroundColor = "";
    bottom_section.style.backgroundColor = "";
    h3_calc.style.color = "";
    THEME_div.style.color = "";
    THEME_filter.style.color = "";
    THEME_filter2.style.backgroundColor = "";
    h2Display.style.color = "";
  }
});
