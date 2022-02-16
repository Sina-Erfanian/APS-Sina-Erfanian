// const getBtn = document.querySelector("button");
// const getUl = document.querySelector("ul");

// async function randomJok() {
//   let response = await axios.get("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   return response.data.joke;
// }

// getBtn.addEventListener("click", async () => {
//   let res = await randomJok();
//   let createEle = document.createElement("li");
//   createEle.innerHTML = res;
//   getUl.append(createEle);
// });

////////////////////////////////////////////////

// const form = document.querySelector("form");
// let section = document.querySelector("section");

// form.addEventListener("submit", async (e) => {
//   section.innerHTML = "";
//   e.preventDefault();
//   let getValue = e.target.input.value;
//   let res = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${getValue}`
//   );
//   console.log(res);
//   addImage(res.data);
//   e.target.input.value = "";
// });

// function addImage(data) {
//   for (const iterator of data) {
//     console.log(iterator);
//     let createImg = document.createElement("img");
//     createImg.src = iterator.show.image.medium;
//     section.append(createImg);
//   }
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method : "POST",
//     headers : {
//         "Content-type" : "application/json"
//     },
//     body : JSON.stringify({
//         id: 1,
//         name : "sina"
//     })
// }).then(data => data.json()).then(data => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "DELETE"
// })

// PATCH update information without delete others data
// PUT delete all of data and replace it with new data
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "sina",
//   }),
// })
//   .then((data) => data.json())
//   .then((data) => console.log(data));
