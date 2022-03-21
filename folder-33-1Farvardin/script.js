// const btn = document.querySelector("#to");
// let btn2 = document.querySelector("#by")
// btn.addEventListener("click", () => {
//   window.scrollTo(0, 0);
//   console.log(btn.dataset.name);
// });

// btn2.addEventListener("click",()=> {
//     window.scrollBy(0,100)
//     console.log(btn2.dataset.name);
// })

let audio = document.querySelector("audio");

let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let duration = document.querySelector("#duration");
let showDuration = document.querySelector("#showDuration");
let showCurrent = document.querySelector("#showCurrent");
let speed = document.querySelector("#speed");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let pre = document.querySelector("#pre");
let next = document.querySelector("#next");

let src = [
  "Behzad Leito & Sepehr Khalse - Hese Mamooli.mp3",
  "Amir Tataloo - Nagoo Na.mp3",
  "Amir Tataloo - Nesfe Shab.mp3",
];

let num = 0;

next.addEventListener("click", () => {
  num++;
  if (num > src.length - 1) {
    num = 0;
  }
  audio.setAttribute("src", src[num]);
  audio.play()
});

pre.addEventListener("click", () => {
  num--;
  if (num < 0) {
    num = 2;
  }
  audio.setAttribute("src", src[num]);
  audio.play()
});

plus.addEventListener("click", () => {
  audio.currentTime += 5;
});

minus.addEventListener("click", () => {
  audio.currentTime -= 5;
});

play.addEventListener("click", () => {
  audio.play();
  setInterval(() => {
    showCurrent.innerHTML = Math.floor(audio.currentTime);
  }, 1000);
});

pause.addEventListener("click", () => {
  audio.pause();
});

duration.addEventListener("click", () => {
  showDuration.innerHTML = Math.floor(audio.duration / 60);
});

speed.addEventListener("click", () => {
  audio.playbackRate = 2;
});
