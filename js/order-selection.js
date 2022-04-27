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

var fired_button = $("input").val();

$("input").click(function () {
  var fired_button = $(this).val();
  console.log("This button " + fired_button + " was clicked");
});

// Selection of all value of Artstyle
const AllBtn = document.getElementsByClassName("btn");
console.log(AllBtn);
const HeavyPaintingBtn = document.getElementById("Heavy-Painting");
console.log(HeavyPaintingBtn);
const LightPaintingBtn = document.getElementById("Light-Painting");
console.log(LightPaintingBtn);
const LineartBtn = document.getElementById("Lineart");
console.log(LineartBtn);
const ColorSketchBtn = document.getElementById("Color-sketch");
console.log(ColorSketchBtn);
const SketchBtn = document.getElementById("Sketch");
console.log(SketchBtn);

// Selection of nb of Character

const characterSlider = document.getElementById("slider");

// Selection of kind of shot

const PortraitPrice = document;

// Add price

const total = 0;

AllBtn[0].addEventListener("onclick", () => {
  if (HeavyPaintingBtn) {
    console.log("hello");
  }
});
