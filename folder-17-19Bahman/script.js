// function keyDownHandler() {
//   console.log("Key down");
// }
// function keyPressHandler() {
//   console.log("Key press");
// }
// function keyUpHandler() {
//   console.log("Key Up");
// }

////////////////////////////////////////////////////////////////

let $ = document;

const firstValue = $.querySelector(".C");
const SecondValue = $.querySelector(".F");
const converter = $.querySelector("#converter");
const result = $.querySelector(".result");
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

convertButton.addEventListener("click", () => {
  if (!converter.value || isNaN(converter.value)) {
    result.innerHTML = "insert correct value";
    result.style.color = "#993300";
  } else {
    if (firstValue.innerHTML === "°C") {
      let resultValue = converter.value * 1.8 + 32;
      result.style.color = "rgb(255,255,102)";
      result.innerHTML = `${converter.value}°C to ${resultValue}°F`;
    } else {
      let resultValue = (converter.value - 32) * (5 / 9);
      result.style.color = "rgb(255,255,102)";
      result.innerHTML = `${converter.value}°F to ${resultValue.toFixed(2)}°C`;
    }
  }
});

resetButton.addEventListener("click", () => {
  result.innerHTML = "";
  converter.value = "";
});

changeButton.addEventListener("click", () => {
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    SecondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "°F to °C";
  } else {
    firstValue.innerHTML = "°C";
    SecondValue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    document.title = "°C to °F";
  }
});
