const btn = document.querySelector("button");
const modalParent = document.querySelector(".modal-parent");
const section = document.querySelector(".sec");
const close = document.querySelector(".X");

btn.addEventListener("click", () => {
  modalParent.style.display = "block";
  section.style.filter = "blur(10px)";
});

close.addEventListener("click", () => {
  modalParent.style.display = "none";
  section.style.filter = "blur(0px)";
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 27) {
    modalParent.style.display = "none";
    section.style.filter = "blur(0px)";
    btn.style.outline = "none";
  }
});
