const listItems = [
  { id: 1, name: "Sina", family: "Erfanian" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Mehrab", family: "Gholami" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "mmd", family: "gholi" },
  { id: 7, name: "aboli", family: "ghoflizade" },
  { id: 8, name: "ahmad", family: "safari" },
  { id: 9, name: "Babak", family: "farhadi" },
  { id: 10, name: "Hasan", family: "Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Mehran", family: "Amino" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
  { id: 23, name: "Melika", family: "Ehsani" },
  { id: 24, name: "Mehran", family: "Amino" },
  { id: 25, name: "Fatemeh", family: "Alilou" },
];

const list = document.getElementById("list");
const pagination = document.getElementById("pagination");

let currentPage = 1;
let rowsCount = 5;

function displayItem(listItem, list, currentPage, rowsCount) {
  list.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = listItem.slice(startIndex, endIndex);

  paginatedUsers.forEach((element) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("item");

    createDiv.innerHTML = element.name + " " + element.family;

    list.append(createDiv);
  });
}

function setupPagination(listItem, pagination, rowsCount) {
  pagination.innerHTML = "";

  let pageCount = Math.ceil(listItem.length / rowsCount);

  for (let index = 1; index < pageCount + 1; index++) {
    let btn = btnGenerator(index, listItem);
    pagination.append(btn);
  }
}

function btnGenerator(page, listItem) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;

    displayItem(listItem, list, currentPage, rowsCount);

    let prevBtn = document.querySelector("button.active");
    prevBtn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

displayItem(listItems, list, currentPage, rowsCount);
setupPagination(listItems, pagination, rowsCount);
