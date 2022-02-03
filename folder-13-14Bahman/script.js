// let img = document.getElementById("bulb");
// let btn = document.getElementById("btn");

// let bulbFlag = false; //true => on // false => off

// btn.addEventListener("click", () => {
//   if (bulbFlag) {
//     img.setAttribute("src", "bulboff.gif");
//     btn.innerHTML = "Turn on";
//     bulbFlag = false;
//   } else {
//     img.setAttribute("src", "bulbon.gif");
//     btn.innerHTML = "Turn off";
//     bulbFlag = true;
//   }
//   console.log(bulbFlag);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let userNameInput = document.querySelector(".username");
// let PasswordInput = document.querySelector(".password");
// let btn = document.querySelector("#btn");
// let modal = document.querySelector(".modal");

// btn.addEventListener("click", () => {
//   let userNameValue = userNameInput.value;
//   let passwordValue = PasswordInput.value;

//   if (userNameValue.length < 12 || passwordValue.length < 8) {
//     modal.style.display = "inline";
//     modal.style.backgroundColor = "red";
//     modal.innerHTML = "something went wrong";
//   } else {
//     modal.style.display = "inline";
//     modal.style.backgroundColor = "green";
//     modal.innerHTML = "successful";
//   }

//   setTimeout(() => {
//     modal.style.display = "none";
//   }, 3000);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let usernameValidation = document.querySelector(".username-validation");
let passwordValidation = document.querySelector(".password-validation");
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");

usernameInput.addEventListener("blur", () => {
  if (usernameInput.value.length < 12) {
    usernameValidation.innerHTML = "Must contain 12 character (min)";
    usernameValidation.style.color = "red";
    usernameValidation.style.display = "block";
  } else {
    usernameValidation.innerHTML = "correct value";
    usernameValidation.style.color = "green";
    usernameValidation.style.display = "block";
  }
});
passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length < 8) {
    passwordValidation.innerHTML = "Must contain 8 character (min)";
    passwordValidation.style.color = "red";
    passwordValidation.style.display = "block";
  } else {
    passwordValidation.innerHTML = "correct value";
    passwordValidation.style.color = "green";
    passwordValidation.style.display = "block";
  }
});
