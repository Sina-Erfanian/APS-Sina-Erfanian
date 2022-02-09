// let username = document.querySelector("#username");
// let btn = document.querySelector("#btn");

// username.addEventListener("keydown", (event) => {
//   console.log(event.target.value);
// });
// btn.addEventListener("click", (event) => {
//   console.log(event.target.value);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target);
// });

// let tagA = document.querySelector("a")

// tagA.addEventListener("click",(event)=> {
//   event.preventDefault()
// })

// let inputEle = document.querySelector("#username");

// inputEle.addEventListener("keydown", (event) => {
//   event.preventDefault();
// });

//////////////////////////////////////////////////////////////////////

let $ = document;
let keyCodeElem = $.querySelector("#keyCode");
let keyElem = $.querySelector("#key");
let locationElem = $.querySelector("#location");
let whichElem = $.querySelector("#which");
let codeElem = $.querySelector("#code");

document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
  starter.style.display = "none"
  heading.style.display = "flex"
  ascii.style.display = "flex"
  infos.style.display = "flex"
  let eventKey = event.key;
  let eventLocation = event.location;
  let eventWhich = event.which;
  let eventCode = event.code;

  keyCodeElem.innerHTML = eventWhich;
  keyElem.innerHTML = eventKey;
  locationElem.innerHTML = eventLocation;
  whichElem.innerHTML = eventWhich;
  codeElem.innerHTML = eventCode;
});
