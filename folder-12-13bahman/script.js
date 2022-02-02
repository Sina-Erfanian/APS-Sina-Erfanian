// function LoginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("data is ready");
//     // return {userEmail : email}
//     callback({ userEmail: email });
//   }, 3000);
// }

// const user = LoginUser("sina@gmail.com", 1234, (user) => {
//   console.log(user.userEmail);
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       resolve("harchi");
//     } else {
//       reject(new Error("user in not logged in"));
//     }
//   }, 1000);
// });

// promise
//     .then((data) => console.log(data + " , hi"))
//     .catch((error) => console.log(error));

/////////////////////////////// callback //////////////////////////
// function addArticle(newAr,callback) {
//   setTimeout(() => {
//     article.push(newAr);
//     callback()
//   }, 500);
// }

// addArticle({ title: "third", content: "Hello Programming" },showValue);

// let article = [
//   { title: "First artice", content: "Hello world" },
//   { title: "secound artice", content: "Hello js" },
// ];

// function showValue() {
//   article.forEach((ele) => console.log(ele.title + " : " + ele.content));
// }

//////////////////////////// promise //////////////////////////////
// function addArticle(newAr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let articleLength = article.length;
//       article.push(newAr);
//       if (article.length === articleLength + 1) {
//         resolve("article added successfully");
//       } else {
//         reject("something went wrong");
//       }
//     }, 500);
//   });
// }

// addArticle({ title: "third", content: "Hello Programming" })
//   .then(showValue)
//   .catch((err) => console.log(err));

// showValue();

// let article = [
//   { title: "First artice", content: "Hello world" },
//   { title: "secound artice", content: "Hello js" },
// ];

// function showValue() {
//   article.forEach((ele) => console.log(ele.title + " : " + ele.content));
// }

// function addArticle(newAr) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let articleLength = article.length;
//         article.push(newAr);
//         if (article.length === articleLength + 1) {
//           resolve("article added successfully");
//         } else {
//           reject("something went wrong");
//         }
//       }, 500);
//     });
// }
///////////////////////////// async ///////////////////
// async function init() {
//   await addArticle({ title: "third", content: "Hello Programming" });
//   showValue();
// }

// init();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let p = new Promise((resolve, reject) => {
//   let a = 2 + 2;
//   if (a == 4) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// p.then((data) => {
//   console.log("this is in the then " + data);
// })
// .catch((data) => {
//   console.log("This is in the catch " + data);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const recorderOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("video one recorded");
  }, 2000);
});
const recorderTwo = new Promise((resolve, reject) => {
  resolve("video two recorded");
});
const recorderthree = new Promise((resolve, reject) => {
  resolve("video three recorded");
});

Promise.all([recorderOne, recorderTwo, recorderthree]).then((message) => {
  console.log(message);
});
