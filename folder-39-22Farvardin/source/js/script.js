const title = document.querySelector(".title");
document.addEventListener("keyup", (e) => {
  append(e);
  let userEventKey = e.key.toUpperCase();
  let mainKeyElem = document.getElementById(userEventKey);
  console.log(mainKeyElem);
  mainKeyElem.classList.add("hit");
  mainKeyElem.addEventListener("animationend", () => {
    mainKeyElem.classList.remove("hit");
  });
});
function append(event) {
  if (event.key === "Backspace") {
    title.innerHTML = title.innerHTML.slice(0, -1);
    return;
  }
  title.innerHTML += event.key;
}
