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
