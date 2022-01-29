// const allProduct = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 17000000,
//   },
//   {
//     id: 2,
//     name: "Phone",
//     price: 700000,
//   },
//   {
//     id: 1,
//     name: "pen",
//     price: 120000,
//   },
//   {
//     id: 1,
//     name: "Eraser",
//     price: 5000,
//   },
// ];

// const userBasket = [
//   {
//     id: 2,
//     name: "Phone",
//     price: 700000,
//   },
//   {
//     id: 1,
//     name: "pen",
//     price: 120000,
//   },
// ];

// const userProduct = prompt("Enter the name of your Prodct");
// let requsted;
// const isAvalable = allProduct.some((ele) => {
//   if (ele.name === userProduct) {
//     requsted = ele;
//     return true;
//   }
// });

// if (isAvalable === true) {
//   const NewObj = {
//       id : 3,
//       name : requsted.name,
//       price : requsted.price
//   }
//   let sum = 0
//   userBasket.push(NewObj)
//   console.log(userBasket);
//   userBasket.forEach(element => {
//       sum = sum + element.price
//   });
//   console.log("hast");
//   console.log(`the total price is ${sum}`);
// } else {
//   console.log("nist");
// }

// const allProduct = [
//   { id: 1, name: "laptop", price: 17000000 },
//   { id: 2, name: "phone", price: 700000 },
//   { id: 3, name: "camera", price: 1200000 },
//   { id: 4, name: "cable", price: 55000 },
//   { id: 5, name: "coolpad", price: 400000 },
//   { id: 6, name: "mouse", price: 100000 },
//   { id: 7, name: "keyboard", price: 1200000 },
// ];

// const userBasket = [
//   { id: 1, name: "laptop", price: 17000000 },
//   { id: 2, name: "phone", price: 700000 },
// ];

// const userRequest = prompt(
//   "For add product press number 1 \n For remove product press number 2"
// );

// if (userRequest === "1") {
//   let userProduct = prompt("Enter your name of product");
//   let userProductAvalabale;
//   let isAvalable = allProduct.some((ele) => {
//     if (ele.name === userProduct) {
//       userProductAvalabale = ele;
//       return true;
//     }
//   });
//   if (isAvalable === true) {
//     let newObj = {
//       id: 3,
//       name: userProductAvalabale.name,
//       price: userProductAvalabale.price,
//     };
//     userBasket.push(newObj);
//     console.log("your basket is ", userBasket);
//   } else {
//     alert("your product isn't availbe");
//   }
// } else if (userRequest === "2") {
//   let userProduct = prompt("Enter your name of product");

//   let productIndex = userBasket.findIndex((ele) => {
//     return ele.name === userProduct;
//   });

//   userBasket.splice(productIndex, 1);
//   console.log("your basket is : ", userBasket);
// } else {
//   alert("Please Enter carefuly");
// }

const allProduct = [
  { id: 1, name: "laptop", price: 50 },
  { id: 2, name: "phone", price: 110 },
  { id: 3, name: "camera", price: 200 },
  { id: 4, name: "cable", price: 40 },
  { id: 5, name: "coolpad", price: 300 },
  { id: 6, name: "mouse", price: 20 },
  { id: 7, name: "keyboard", price: 120 },
];

let lessThan = allProduct.filter((ele) => ele.price < 100);
console.log(lessThan);
let postCost = lessThan.length * 10;
console.log(postCost);

let sum = 0;

allProduct.forEach((ele) => {
  sum = sum + ele.price;
});

console.log(sum + postCost);
