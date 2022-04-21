let customScroll = document.querySelector("#scroll");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  let documentHeight = document.body.clientHeight;

  let windowHeight = window.innerHeight;

  let scrollPercent = scrollY / (documentHeight - windowHeight);

  let scrollPercentRounded = Math.round(scrollPercent * 100);

  customScroll.style.width = `${scrollPercentRounded}%`;
});


// setTimeout(() => {
//     location.href = location.href
// }, 10000);
