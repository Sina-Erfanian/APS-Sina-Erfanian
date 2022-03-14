// window.addEventListener("contextmenu",()=> {
//     alert("right click")
// })

// const textArea = document.querySelector("textarea");

// textArea.addEventListener("copy", (event) => {
//   event.preventDefault();
//   console.log("copy");
// });
// textArea.addEventListener("cut", (event) => {
//   event.preventDefault();
//   console.log("cut");
// });
// textArea.addEventListener("paste", (event) => {
//   event.preventDefault();
//   console.log("paste");
// });
// window.addEventListener("DOMContentLoaded", () => {
//   alert("loaded Dom");
// });

// window.addEventListener("load", () => {
//   alert("loaded all");
// });

/////////////////////////////////////////

const divParent = document.querySelector("#contextMenu");
window.addEventListener("click", (event) => {
  divParent.style.display = "none";
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    divParent.style.display = "none";
  }
});
window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const pageX = event.pageX;
  const pageY = event.pageY;
  divParent.style.top = `${pageY}px`;
  divParent.style.left = `${pageX}px`;
  divParent.style.display = "block";
});
