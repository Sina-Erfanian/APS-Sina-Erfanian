const nav = document.querySelector("#mainNav");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop === 0) {
    nav.classList.remove("bg-black", "txt-white");
  } else {
    nav.classList.add("bg-black", "txt-white");
  }
});
