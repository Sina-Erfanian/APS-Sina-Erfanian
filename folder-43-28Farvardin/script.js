// const box = document.querySelector(".box");

// box.insertAdjacentHTML(
//   "afterbegin",
//   ` <ul>
//         <li><a href="">1</a></li>
//         <li><a href="">2</a></li>
//         <li><a href="">3</a></li>
//         <li><a href="">4</a></li>
//     </ul> `
// );

// only for object
// const obj ={
//     name : "sina",
//     age : 19,
//     pass : "1234"
// }

// delete obj.age

// console.log(obj);

const wrapper = document.querySelector(".wrapper");

let arr = [
  "amin",
  "sina",
  "saeed",
  "shirin",
  "zahra",
  "amin",
  "sina",
  "saeed",
  "shirin",
  "zahra",
  "amin",
  "sina",
  "saeed",
  "shirin",
  "zahra",
  "amin",
  "sina",
  "saeed",
  "shirin",
  "zahra",
];

let fragment = document.createDocumentFragment()

arr.forEach(ele => {
    let createLi = document.createElement("li")
    createLi.innerHTML = ele
    fragment.append(createLi)
})

wrapper.append(fragment)
