// const load = document.querySelector(".loader");

// window.addEventListener("load", () => {
//   load.classList.add("hidden");
// });

// ///////////////////////////

// const box = document.querySelector("#box");
// const button = document.querySelector("button");

// function mouseHandler() {
//   console.log("Mouse Moved :)");
// }

// box.addEventListener("mousemove", mouseHandler);
// button.addEventListener("click", () => {
//   box.removeEventListener("mousemove", mouseHandler);
// });

// //////////////////////////////

// const input = document.querySelector("input");
// const select = document.querySelector("#select");
// input.addEventListener("select", (e) => {
//   let res = e.target.value.slice(
//     e.target.selectionStart,
//     e.target.selectionEnd
//   );
//   select.innerHTML = `You Select : ${res}`;
// });

///////////////////////////////////////////////

const count = document.querySelector(".counter");
let input = document.querySelector("input");
let max = input.getAttribute("maxlength");

input.addEventListener("keyup", (e) => {
  let len = max - e.target.value.length;
  count.innerHTML = len
});
