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

var result = {
  artStyle: undefined,
  range: undefined,
  shotType: undefined,
  desc: undefined,
  pictures: [],
  bgType: undefined,
  extras: undefined,
};

$("input").click(function () {
  var fired_button = $(this).val() * 50;
  console.log("This button " + fired_button + " was clicked");
});

function setFormValue(type, value) {
  result[value] = value;
  console.log("RESULT", result);
}

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

function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

function inspect(e) {
  console.log(e);

  console.log(toDataURL(e));
}
