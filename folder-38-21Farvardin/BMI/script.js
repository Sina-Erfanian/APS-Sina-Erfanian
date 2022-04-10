const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const result = document.querySelector("#result");
const weightVal = document.querySelector("#weight-val");
const heightVal = document.querySelector("#height-val");
const category = document.querySelector("#category");

function weightHandler(e) {
  let BMI = (e.target.value / (height.value / 100) ** 2).toFixed(1);
  weightVal.innerHTML = `${e.target.value} km`;
  result.innerHTML = BMI;

  if (BMI < 18.5) {
    category.innerHTML = "Underweight";
    result.style.color = "red";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category.innerHTML = "Normal weight";
    result.style.color = "green";
  } else if (BMI >= 25 && BMI < 29.9) {
    category.innerHTML = "Overweight";
    result.style.color = "orange";
  } else {
    category.innerHTML = "Obesity";
    result.style.color = "red";
  }
}

function heightHandler(e) {
  let BMI = (weight.value / (e.target.value / 100) ** 2).toFixed(1);
  heightVal.innerHTML = `${e.target.value} cm`;
  result.innerHTML = BMI;

  if (BMI < 18.5) {
    category.innerHTML = "Underweight";
    result.style.color = "red";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category.innerHTML = "Normal weight";
    result.style.color = "green";
  } else if (BMI >= 25 && BMI < 29.9) {
    category.innerHTML = "Overweight";
    result.style.color = "orange";
  } else {
    category.innerHTML = "Obesity";
    result.style.color = "red";
  }
}

weight.addEventListener("input", weightHandler);
height.addEventListener("input", heightHandler);
