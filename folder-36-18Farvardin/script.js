const div = document.querySelector("div");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  div.style.animation = "move 5s 3";
});

div.addEventListener("animationstart", () => {
  p.innerHTML = "Animation Start";
});

div.addEventListener("animationiteration", () => {
  p.innerHTML = "Animation Repeat";
});

div.addEventListener("animationend", () => {
  p.innerHTML = "Animation end";
});
