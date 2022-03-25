const addBtn = document.querySelector("#addButton");
let input = document.querySelector("#itemInput");
let ulElem = document.querySelector("#todoList");
let clear = document.querySelector("#clearButton");

let todosArray = [];

addBtn.addEventListener("click", () => {
  let inputValue = input.value;

  const obj = {
    id: todosArray.length + 1,
    title: inputValue,
    status: false,
  };
  input.value = "";

  todosArray.push(obj);
  localStorageAdd(todosArray);
  addNewTodo(todosArray);
  input.focus();
});

function localStorageAdd(local) {
  localStorage.setItem("todos", JSON.stringify(local));
}

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    let inputValue = input.value;

    const obj = {
      id: todosArray.length + 1,
      title: inputValue,
      status: false,
    };
    input.value = "";

    todosArray.push(obj);
    localStorageAdd(todosArray);
    addNewTodo(todosArray);
  }
});

function addNewTodo(todoEle) {
  ulElem.innerHTML = "";
  todoEle.forEach((element) => {
    let createLi = document.createElement("li");
    createLi.className = "completed well";
    let createLabel = document.createElement("label");
    createLabel.innerHTML = element.title;

    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success";
    completeBtn.innerHTML = "Complete";
    completeBtn.addEventListener("click", (e) => {
      let dataId = element.id;
      let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
      todosArray = localStorageTodos;
      todosArray.forEach((ele) => {
        if (ele.id === dataId) {
          ele.status = !ele.status;
        }
      });
      localStorageAdd(todosArray);
      addNewTodo(todosArray);
    });

    let DeleteBtn = document.createElement("button");
    DeleteBtn.className = "btn btn-danger";
    DeleteBtn.innerHTML = "Delete";
    DeleteBtn.addEventListener("click", () => {
      let dataId = element.id;
      let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
      todosArray = localStorageTodos;
      let res = todosArray.findIndex((ele) => ele.id === dataId);
      todosArray.splice(res, 1);
      localStorageAdd(todosArray);
      addNewTodo(todosArray);
    });

    if (element.status) {
      completeBtn.innerHTML = "UnComplete";
      createLi.className = "uncompleted well";
    }

    createLi.append(createLabel, completeBtn, DeleteBtn);
    ulElem.append(createLi);
  });
}

window.addEventListener("load", () => {
  let getLocalStorage = JSON.parse(localStorage.getItem("todos"));
  if (getLocalStorage) {
    todosArray = getLocalStorage;
  } else {
    todosArray = [];
  }
  addNewTodo(todosArray);
});

clear.addEventListener("click", () => {
  todosArray = [];
  addNewTodo(todosArray);
  localStorage.removeItem("todos");
});
