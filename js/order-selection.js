console.log("JS IS CONNECTED");

// RANGE SLIDER/ "HOW MANY CHARACTER YOU WANT"

const slider = document.getElementById("myRange");
const output = document.getElementById("character-number");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function () {
  output.innerHTML = this.value;

  console.log(output);
};

// ALL THE BUTTON OF THE STYLE QUESTION

const artstyleBtn = document.querySelectorAll(".artstyle-button");

const HeavyPaintingBtn = document.getElementById("Heavy-Painting");
const LightPaintingBtn = document.getElementById("Light-Painting");
const LineartBtn = document.getElementById("Lineart");
const ColorSketchBtn = document.getElementById("Color-sketch");
const SketchBtn = document.getElementById("Sketch");

artstyleBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("highlight-button")) {
      button.classList.remove("highlight-button");
      button.attributes.remove("disabled");
    } else button.classList.add("highlight-button");
    button.attributes.add("disable");

    console.log("button was clicked");
  });
});

// ALL THE BUTTON OF THE SHOT QUESTION

const shotBtn = document.querySelectorAll(".shot-button");

shotBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("highlight-button")) {
      button.classList.remove("highlight-button");
    } else button.classList.add("highlight-button");

    console.log("button was clicked");
  });
});

/*
if (button.classList.contains("highlight-button" && "active")) {
  button.classList.add("disabled").button.classList.contains("");
}
*/
