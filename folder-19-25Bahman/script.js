// const request = new XMLHttpRequest()

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     if (res.status === 404) {
//       console.log("404 ERROR");
//     } else {
//       console.log("resolved", res);
//       const data = res.json()
//       return data
//     }
//   })
//   .then(data => {
//       console.log(data)
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await response.json();
//   return data;
// };
// getData()
//   .then((data) => {
//     console.log("resolved", data);
//   })
//   .catch((err) => {
//     console.log("reject", err);
//   });

// async function postData() {
//   const userPost = {
//     id: 1,
//     name: "sina",
//     username: "_sina_",
//     email: "sina@gmail.com",
//   };
//   fetch("https://jsonplaceholder.typicode.com/users/", {
//     method: "POST",
//     body: JSON.stringify(userPost),
//     headers : {
//         "content-Type" : "application/json"
//     }
//   })
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => console.log(data));
// }
// postData();

// function getData() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users/")
//     .then((res) => console.log(res.data));
// }
// getData();

// function postData() {
//   const userPost = {
//     id: 1,
//     name: "sina",
//     username: "_sina_",
//     email: "sina@gmail.com",
//   };
//   axios
//     .post("https://jsonplaceholder.typicode.com/users/", userPost)
//     .then((datas) => console.log(datas.data));
// }
// postData();
