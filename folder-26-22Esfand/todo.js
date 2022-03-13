const todoContainer = document.querySelector(".todos");
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addTodo(value) {
  const createLi = document.createElement("li");
  createLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  const createSpan = document.createElement("span");
  const createI = document.createElement("i");
  createI.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  createI.className = "fa fa-trash-o delete";
  createSpan.innerHTML = value;
  createLi.append(createSpan, createI);
  todoContainer.append(createLi);
}

input.addEventListener("keydown", (e) => {
  const value = e.target.value;

  if (e.keyCode === 13) {
    if (value) {
      input.value = "";
      addTodo(value);
    }
  }
});
