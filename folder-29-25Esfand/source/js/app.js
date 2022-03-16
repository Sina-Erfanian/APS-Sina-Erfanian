const inputField = document.querySelector("#input-field");
const btnSave = document.querySelector("#btn-save");
const btnDelete = document.querySelector("#btn-delete");
const Colors = document.querySelectorAll(".color-box");
const listContainer = document.querySelector("#listed");

Colors.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let mainColor = e.target.style.backgroundColor;
    inputField.style.backgroundColor = mainColor;
    if (mainColor == "rgb(255, 255, 255)") {
      inputField.style.color = "#000";
    } else {
      inputField.style.color = "#fff";
    }
  });
});

function generateNote() {
  let divEle = document.createElement("div");
  let divBg = inputField.style.backgroundColor;
  divEle.style.backgroundColor = divBg;
  let pEle = document.createElement("p");
  pEle.innerHTML = inputField.value;
  divEle.className = "card shadow-sm rounded";
  pEle.className = "card-text p-3";
  divEle.append(pEle);
  listContainer.append(divEle);
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
  inputField.style.color = "#000";
  divEle.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    let message = document.createElement("p");
    message.innerHTML = "Successfully Removed";
    message.style.backgroundColor = "#F65230";
    message.style.borderRadius = "10px";
    message.style.color = "#fff";
    message.style.padding = "10px";
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.right = "20px";
    document.body.append(message);
    setTimeout(() => {
      message.remove();
    }, 3000);
  });
}

btnDelete.addEventListener("click", () => {
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
  inputField.style.color = "#000";
  listContainer.innerHTML = "";
});

inputField.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (inputField.value) {
      generateNote();
    }
  }
});
btnSave.addEventListener("click", () => {
  if (inputField.value) {
    generateNote();
  }
});
