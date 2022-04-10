let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let img = document.querySelector(".img-slider");

let srcImg = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let index = 0;

function nextHandler() {
  index++;
  if (index > srcImg.length - 1) {
    index = 0;
  }
  img.src = srcImg[index];
}

function prevHandler() {
  index--;
  if (index < 0) {
    index = srcImg.length - 1;
  }
  img.src = srcImg[index];
}

setInterval(nextHandler, 4000);

prev.addEventListener("click", prevHandler);
next.addEventListener("click", nextHandler);

// const title = document.querySelector("#root-change");
// const root = document.querySelector("#root");

// root.addEventListener("click", () => {
//   document.documentElement.style.setProperty("--primaryColor", "green");
//   console.log(
//     document.documentElement.style.getPropertyValue("--primaryColor")
//   );
// });
