// let userInput = prompt("Enter your name");

// let userInputInArray = userInput.split("");

// let check = userInputInArray.reverse();

// let Final = check.join("");

// if (userInput === Final) {
//   alert("correct");
// } else {
//   alert("incorrect");
// }

// let todo = [
//   { id: 1, name: "wash the dishes", type: false },
//   { id: 2, name: "feed the cat", type: true },
//   { id: 3, name: "walk", type: false },
// ];

// let userTodo = prompt("1-add \n 2-remove \n 3-do todo");

// if (userTodo === "1") {
//   let userInputtodo = prompt("Enter your todo");
//   let newTodo = {
//     id: todo.length + 1,
//     name: userInputtodo,
//     type: false,
//   };
//   todo.push(newTodo);
//   console.log(todo);
// } else if (userTodo === "2") {
//   let userInputtodo2 = prompt("Enter your todo that you want to remove");
//   let indexTodo = todo.findIndex((ele) => {
//     return ele.name === userInputtodo2;
//   });
//   todo.splice(indexTodo, 1);
//   console.log(todo);
// } else if (userTodo === "3") {
//   let userInputtodo3 = prompt("Enter your task that you wanna done it");
//   todo.forEach((ele) => {
//     if (ele.name === userInputtodo3) {
//       ele.type = true;
//     }
//   });
//   console.log(todo);
// } else {
//   alert("Please choose on of them");
// }

// let tasks = {
//   ali: ["html", "css", "js"],
//   mohammad: ["vue", "angular", "react"],
//   hossein: ["seo", "digital marketing"],
//   sina: ["admin"],
// };

// let doTask = prompt("Enter The Task Name");
// let employee = prompt("Enter The Name of Employee");

// let name = tasks[employee]; /// tasks["sina"] => ["admin"].push ? content ==> sina : ["admin","content"]

// name.push(doTask);

// console.log(tasks);

let exam = [
  { id: 1, title: "2 + 2 ?", answer: "4" },
  { id: 2, title: "3 * 4 ?", answer: "12" },
  { id: 3, title: "25 / 5 ?", answer: "5" },
  { id: 4, title: "4 + 12 ?", answer: "16" },
  { id: 5, title: "100 * 2 ?", answer: "200" },
  { id: 6, title: "Capital of iran ?", answer: "tehran" },
];

let score = 0;
exam.forEach((ele) => {
  let userAnswer = prompt(ele.title);
  if (userAnswer === ele.answer) {
    score++;
  }
});
alert(score);
