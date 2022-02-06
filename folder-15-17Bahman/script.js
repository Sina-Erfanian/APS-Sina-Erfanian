// let width = document.querySelector("#width")
// let height = document.querySelector("#height")

// window.addEventListener("resize",()=> {
//     width.textContent = window.innerWidth
//     height.textContent = window.innerHeight
// })

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// btn.addEventListener("click", () => {
//   let random = randomColor();
//   document.body.style.backgroundColor = random;
//   p.textContent = random;
//   p.style.fontSize = "30px";
// });

// function randomColor() {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// }

// let btn = document.querySelectorAll("button")

// for (let btns of btn){
//     btns.addEventListener("click",changeColor)
// }

// function changeColor(){
//     this.style.backgroundColor = randomColor()
// }

// let input = document.querySelector("input");

// input.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("Up!");
//       break;
//     case "ArrowDown":
//       console.log("Down!");
//       break;
//     case "ArrowLeft":
//       console.log("Left!");
//       break;
//     case "ArrowRight":
//       console.log("Right!");
//       break;
//     default:
//       console.log("ignored");
//   }
// });

// let div = document.querySelector("div");

// let divTop = 50;
// let divLeft = 50;
// window.addEventListener("keydown", (event) => {
//   switch (event.code) {
//     case "ArrowUp":
//       div.style.top = `${divTop--}px`;
//       break;
//     case "ArrowDown":
//       div.style.top = `${divTop++}px`;
//       break;
//     case "ArrowLeft":
//       div.style.left = `${divLeft--}px`;
//       break;
//     case "ArrowRight":
//       div.style.left = `${divLeft++}px`;
//       break;
//     case "ControlLeft":
//       div.classList.toggle("radius");
//       break;
//     default:
//       console.log9("ignored");
//       break;
//   }
// });

// let form = document.querySelector("#formTweet");
// let ul = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let usernameData = e.target.username.value;
//   let tweetData = e.target.tweet.value;

//   if (!usernameData || !tweetData) {
//     alert("something went wrong");
//   } else {
//     alert("submit");
//     addTweet(usernameData, tweetData);
//     e.target.username.value = "";
//     e.target.tweet.value = "";
//   }
// });

// function addTweet(para1, para2) {
//   let createLi = document.createElement("li");
//   let createB = document.createElement("b");

//   createB.textContent = para1;
//   createLi.append(createB, ` - ${para2}`);
//   ul.append(createLi);
// }

// let form = document.querySelector("form");
// let ul = document.querySelector("#list");

// form.addEventListener("submit", (ev) => {
//   ev.preventDefault();
//   let productValue = ev.target.product.value;
//   let qtyValue = ev.target.qty.value;
//   if (!productValue || !qtyValue) {
//     alert("Enter Your Product Name");
//   } else {
//     let createLi = document.createElement("li");
//     createLi.textContent = `Name of your product is ${productValue} - the Price ${qtyValue}`;
//     ul.append(createLi);
//     ev.target.product.value = "";
//     ev.target.qty.value = "";
//   }
// });

let h1 = document.querySelector("h1");
let input = document.querySelector("input");

input.addEventListener("input", () => {
  h1.innerText = `Welcome  ${input.value.toUpperCase()}`;
  // console.log(this.value)
});
