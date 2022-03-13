// let h1 = document.getElementById("title");
// console.log(h1.nodeName);
// console.log(h1.nodeType);

// let head1 = document.getElementById("head1");
// let head2 = document.getElementById("head2");
// let head3 = document.getElementById("head3");
// let head4 = document.getElementById("head4");
// let head5 = document.getElementById("head5");
// let head6 = document.getElementById("head6");

// let listItem = document.getElementsByClassName("list-item");
// let list = document.getElementById("list")

// console.log(head1.parentElement);
// console.log(head1.parentNode);

// console.log(head3.previousElementSibling.previousElementSibling);
// console.log(head3.nextElementSibling.nextElementSibling.nextElementSibling);

// console.log(listItem[2].nextSibling);
// console.log(listItem[2].previousSibling.previousSibling);

// console.log(list.childElementCount);
// console.log(list.children);
// console.log(list.childNodes);
// console.log(list.hasChildNodes());

// console.log(list.firstChild);
// console.log(list.lastChild);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

/////////////////////////////////////

// Functions for select elems with id & class
var $ = document;
function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}

// Select Elems
var togglePassword = _class("toggle-password")[0];
var passwordField = _id("password-field");
console.log(togglePassword);
console.log(passwordField);

// Fire click event on eye icon
togglePassword.addEventListener("click", function () {
  if (passwordField.type == "text") {
    passwordField.type = "password";
    togglePassword.classList.remove("active");
  } else {
    passwordField.type = "text";
    togglePassword.classList.add("active");
  }
});
