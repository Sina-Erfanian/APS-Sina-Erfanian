// let fisrt = Number(prompt("Enter the first one"))
// let secound = Number(prompt("Enter the secound one"))

// if(fisrt % 2 ===0){
//     while(fisrt < secound){
//         alert(fisrt)
//         fisrt+=2
//     }
// }else{
//     fisrt++
//     while(fisrt < secound){
//         alert(fisrt)
//         fisrt+=2
//     }
// }

// let userNumber = 0
// let sum = 0
// let counter = 0
// while (userNumber != -1){
//     sum = sum + userNumber
//     userNumber = Number(prompt("Enter your number"))
//     if(userNumber != -1){
//      counter++
//     }
// }

// alert(sum / counter)

///////////////////////////////////////////////////////////////////////////////////

/*
Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.
Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]
itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"
Notes
Return "Nothing" if you can't afford anything from the store. */

// function itemsPurchased(obj,money){
//   let kala=[];
//   for(let key in obj){
//   let changedMoney= parseFloat( obj[key].slice(1).replace(',',''));
//  if( parseFloat(money.slice(1))>=changedMoney){
//   kala.unshift(key)
//  } 
//   }if(kala.length>=1){
//     return kala.sort();
//   }else{
//     return "NOTHING!";
//   }
// }


// console.log(
//   itemsPurchased(
//     {
//       Phone: "$999",
//       Speakers: "$300",
//       Laptop: "$5,000",
//       PC: "$1200",
//     },
//     "$1000"
//   )
// );





// function getBestStudent(objStudents) {
//   let sum = 0;
//   let studentName = "";
//   // let sumReduce=(preVale,currentValue)=>{
//   //   preVale + currentValue;
//   // }

//   for (let student in objStudents) {
//     if (sum < objStudents[student].reduce((x, y) => x + y)) {
//       sum = objStudents[student].reduce((x, y) => x + y);
//       studentName = student;
//     }
//   }
//   return studentName;
// }

// console.log(
//   getBestStudent({
//     John: [100, 90, 80],
//     Bob: [100, 100, 20],
//     sara: [100, 100, 50],
//   })
// );
