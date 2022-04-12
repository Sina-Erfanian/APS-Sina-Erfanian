const btn = document.querySelector(".btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const bookList = document.querySelector("#book-list");
const form = document.querySelector("#book-form");

window.addEventListener("load", () => {
  let local = JSON.parse(localStorage.getItem("name"));
  if (local) {
    local.forEach((element) => {
      addItemToDom(element.title, element.author, element.year);
    });
  }
});

let books = [];

function addToLocal(allBook) {
  localStorage.setItem("name", JSON.stringify(allBook));
}

function addItemToDom(title, author, year) {
  let createTr = document.createElement("tr");
  let createTh1 = document.createElement("th");
  let createTh2 = document.createElement("th");
  let createTh3 = document.createElement("th");

  createTh1.innerHTML = title;
  createTh2.innerHTML = author;
  createTh3.innerHTML = year;

  createTr.append(createTh1, createTh2, createTh3);
  bookList.append(createTr);
}

function addItem(e) {
  e.preventDefault();
  if (!title.value || !author.value || !year.value) {
    alert("Please Write Something");
  } else {
    let titleValue = title.value;
    let authorValue = author.value;
    let yearValue = year.value;
    const newBookObj = {
      id: books.length + 1,
      title: titleValue,
      author: authorValue,
      year: yearValue,
    };
    books.push(newBookObj);
    addToLocal(books);
    addItemToDom(titleValue, authorValue, yearValue);
    title.value = "";
    author.value = "";
    year.value = "";
  }
}

btn.addEventListener("click", addItem);
