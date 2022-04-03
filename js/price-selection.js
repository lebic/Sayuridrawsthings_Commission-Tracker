console.log("js is connected");

const characterBtn = document.getElementsByClassName("button-option1");
const backgroundBtn = document.getElementsByClassName("button-option2");




backgroundBtn[0].addEventListener("click", (event) => {
  if (backgroundBtn[0].classList.contains("animate_pulse")) {
    backgroundBtn[0].classList.remove("animate_pulse");
  } else backgroundBtn[0].classList.add("animate_pulse");
  console.log("button was clicked");
});


characterBtn[0].addEventListener("click", (event) => {
  if (characterBtn[0].classList.contains("animate_pulse")) {
    characterBtn[0].classList.remove("animate_pulse");
  } else characterBtn[0].classList.add("animate_pulse");
  console.log("button was clicked");
});




