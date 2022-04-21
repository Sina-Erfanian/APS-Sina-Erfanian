let h1Elem = document.querySelector("h1");

let users = [
  { id: 1, name: "sina", age: 19 },
  { id: 2, name: "Amirali", age: 12 },
  { id: 3, name: "sara", age: 10 },
];

let locationSearch = location.search;

let params = new URLSearchParams(locationSearch).get("id");

let findUser = users.find((ele) => ele.id == params);

console.log(findUser);

if (findUser) {
  h1Elem.innerHTML = `Your name is ${findUser.name} || Your age is ${findUser.age}`;
} else {
  h1Elem.innerHTML = "Not found";
}
