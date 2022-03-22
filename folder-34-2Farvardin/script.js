// let h1Elem = document.querySelector("h1")
// let box = document.querySelector(".box")

// h1Elem.addEventListener("dragstart",(event)=> {
//     event.dataTransfer.setData("text",event.target.id)
// })

// box.addEventListener("dragover",(e)=> {
//     e.preventDefault()
// })

// box.addEventListener("drop",(e)=> {
//     let elem = e.dataTransfer.getData("text")
//     let getElem = document.getElementById(elem)
//     e.target.append(getElem)
// })

// let h1Elem = document.querySelectorAll("h1")
// let divElem = document.querySelectorAll("div")

// h1Elem.forEach(ele => {
//     ele.addEventListener("dragstart",(e)=> {
//         e.dataTransfer.setData("element",e.target.id)
//     })
// })

// divElem.forEach(ele => {
//     ele.addEventListener("dragover",(e)=> {
//         e.preventDefault()
//         // console.log(e.target);
//     })
// })

// divElem.forEach(ele => {
//     ele.addEventListener("drop",(e)=> {
//         let data = e.dataTransfer.getData("element")
//         let getElement = document.getElementById(data)
//         e.target.append(getElement,"Good Job :)")
//     })
// })

//////////////////////////////////////////////////////////

// let btn = document.querySelector("#add_btn");
// let overlay = document.querySelector("#overlay");
// let modal = document.querySelector(".modal");
// let closeModal = document.querySelector(".close-modal");
// let inputBtn = document.querySelector("#todo_submit");
// let inputText = document.querySelector("#todo_input");
// let statusELe = document.querySelector("#no_status");
// let todo = document.querySelectorAll('.todo')

// btn.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.style.display = "block";
// });
// closeModal.addEventListener("click", () => {
//   modal.classList.remove("active");
//   overlay.style.display = "none";
// });

// inputBtn.addEventListener("click", () => {
//     statusELe.innerHTML += `<div class="todo" draggable="true">
//           ${inputText.value}
//           <span class="close">&times;</span>
//         </div>`
// });

// todo.forEach(ele => {
//     ele.addEventListener("dragstart",(e)=> {
//         console.log(e.target.className);
//     })
// })

// localStorage.setItem("name","sina")
// localStorage.setItem("id","1")
// localStorage.setItem("age","19")
// localStorage.setItem("family","erfanian")

// let btn = document.querySelector("button")

// btn.addEventListener("click",()=> {
//     let data = localStorage.getItem("name")
//     let data2 = localStorage.getItem("family")
//     document.body.append(data + " " + data2)
//     localStorage.clear()
//     localStorage.setItem("name","ali")
//     localStorage.setItem("family","alizade")
// })

localStorage.setItem("names", JSON.stringify(["sina", "ali", "reza", "ahmad"]));

let data = JSON.parse(localStorage.getItem("names"));
console.log(typeof data);
console.log(data);
