// let asyncFunc = async function(){
//     // return "resolved"
//     throw new Error("reject")
// }

// console.log(asyncFunc())

// async hamisheeeeeeeeeeeeeeeee promise barmigardone => .then/.catch

// throw new Error => rejected       return something => resolved
// async function data(username, password) {
//   if (!username || !password) {
//     throw new Error("something went wrong");
//   }
//   if (password === "sina123") {
//     return "correct";
//   }
//   throw "invalid";
// }

// data("sina", "sina122222")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
// // delayedColorChange yek promise barmigardoone va mitoonim barash await konim
// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
// }
// rainbow();



// const apiToGet =
//   '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';

// // console.log(apiToGet.ticker.price)


// const convert = JSON.parse(apiToGet)
// const final = convert.ticker.price
// console.log(final)


// const obj = {
//     id : 1,
//     name : "sina",
//     age : 22
// }
// console.log(typeof obj)
// const convert = JSON.stringify(obj)
// console.log(typeof convert)
