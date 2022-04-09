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

const HeavyPaintingBtn = document.getElementById("Heavy-Painting").value;
console.log(HeavyPaintingBtn)
const LightPaintingBtn = document.getElementById("Light-Painting").value;
console.log(LightPaintingBtn)
const LineartBtn = document.getElementById("Lineart").value;
console.log(LineartBtn)
const ColorSketchBtn = document.getElementById("Color-sketch").value;
console.log(ColorSketchBtn)
const SketchBtn = document.getElementById("Sketch").value;
console.log(SketchBtn)





