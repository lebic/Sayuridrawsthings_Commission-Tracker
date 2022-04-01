console.log("js is connected");

const characterBtn = document.getElementsByClassName("button-option1");
const backgroundBtn = document.getElementsByClassName("button-option2");

characterBtn[0].addEventListener("click", (event) => {
  characterBtn[0].classList.add("animate_pulse");
  console.log("button was clicked");
});

backgroundBtn[0].addEventListener("click", (event) => {
  backgroundBtn[0].classList.add("animate_pulse");
  console.log("button was clicked");
});
