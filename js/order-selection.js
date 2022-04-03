console.log('JS IS CONNECTED')

// RANGE SLIDER/ "HOW MANY CHARACTER YOU WANT" 

const slider = document.getElementById("myRange");
const output = document.getElementById("character-number");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function () {
  output.innerHTML = this.value;

  console.log(output)
}

//------------------------------------------



const artstyleBtn = document.querySelectorAll(".artstyle-button")


artstyleBtn[0].addEventListener("click", () => {
  if (artstyleBtn[0].classList.contains("highlight-button")) {
    artstyleBtn[0].classList.remove("highlight-button");
  } else artstyleBtn[0].classList.add("highlight-button");
  console.log("button was clicked");
});

//Works only for Heavy painting...