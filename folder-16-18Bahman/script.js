// let changeColor = (name,delay,doNext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = name
//         if(doNext){
//             doNext()
//         }
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("gray",1000)
//         })
//     })
// })

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   console.log(delay);

//   setTimeout(() => {
//     if (delay < 3000) {
//       success(`here is your fake data from ${url}`);
//     } else {
//       failure("connection timeout :( ");
//     }
//   }, delay);
// };

// fakeRequestCallback(
//   "sina.com/page1",
//   function success(response) {
//     console.log(response);
//     fakeRequestCallback(
//       "sina.com/page2",
//       function success(response) {
//         console.log(response);
//       },
//       function failure(err) {
//         console.log(err);
//       }
//     );
//   },
//   function failure(err) {
//     console.log(err);
//   }
// );

// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     console.log(delay);
//     setTimeout(() => {
//       if (delay < 3000) {
//         resolve("correct");
//       } else {
//         reject("error");
//       }
//     }, delay);
//   });
// };

// fakeRequestPromise("sina.com/page1")
//   .then(data => {
//     console.log(data);
//     fakeRequestPromise("sina.com/page2").then(data => {
//       console.log(data)
//     }).catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

// fakeRequestPromise("sina.com/page1")
//   .then((data) => {
//     console.log(data);
//     return fakeRequestPromise("sina.com/page2");
//   })
//   .then((data) => {
//     console.log(data);
//     return fakeRequestPromise("sina.com/page3");
//   })
//   .then((data) => {
//     console.log(data);
//     return fakeRequestPromise("sina.com/page4");
//   })
//   .catch((err) => console.log(err));

// const getData = async () => {
//   try {
//     const data = await axios.get("jasem.com/page1");
//   } catch (error) {
//     console.log(error);
//   }
// };
