let btn = document.querySelectorAll(".btn");

btn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let data = e.target.dataset.color;
    document.documentElement.style.setProperty("--theme-color", data);
  });
});
