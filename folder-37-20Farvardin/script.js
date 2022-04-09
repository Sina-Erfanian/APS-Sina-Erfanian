let input = document.querySelector("input");
let container = document.querySelector(".container");

input.addEventListener("change", (e) => {
  let brightness = e.target.value;
  container.style.filter = `brightness(${brightness}%)`;
});

// let styleContainer = getComputedStyle(container)

// console.log(styleContainer.background);

// let inputElem = document.querySelector("#input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   try {
//     if (!inputElem.value) {
//       throw "Please write Some Thing";
//     } else {
//       console.log("You write Some Thing");
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     inputElem.value = "";
//   }
// });

// let h6 = document.querySelector("h6")

// h6.style.cssText = "color : white ; background-color : green ; font-size : 80px"
