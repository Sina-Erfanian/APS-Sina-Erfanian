let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

setInterval(() => {
  let date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  let sec = date.getSeconds();
  if (sec < 10) {
    seconds.innerHTML = `0${sec}`;
  } else {
    seconds.innerHTML = sec;
  }
}, 1000);
