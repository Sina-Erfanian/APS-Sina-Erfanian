// function findLongNameThatStartsWithA(names) {
//   //return names.find(el=> el[0] === 'A' && el.length>7);
//   return names.find((el) => el.charAt(0) === "A" && el.length > 7);
// }

// let pairsByIndex = pairsByIndexRaw.filter(
//   (el) =>
//     Array.isArray(el) &&
//     el.length === 2 &&
//     Number.isInteger(el[0]) &&
//     Number.isInteger(el[1])
// );

// let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// console.log(numbers.map((el) => el * 100));

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] *= 100;
// }
// console.log(numbers);

// //let arr =[];
// for (let el of numbers) {
//   arr.push(el * 100);
// }
// console.log(arr);

// if (num % 3 === 0 && num % 5 === 0) {
//   return 'FizzBuzz';
// } else if (num % 5 === 0) {
//   return 'Buzz';
// } else if (num % 3 === 0) {
//   return 'Fizz';
// } else {
//   return num;
// }

 // let result = el%3===0 && el%5===0 ? 'FizzBuzz'
  // : el%5===0 ? 'Buzz'
  // : el%3===0 ? 'Fizz'
  // : el;
  // console.log(result);


//   array.reduce((sorted, el) => {
//     let index = 0;
//     while (index < sorted.length && el < sorted[index]) index++;
//     sorted.splice(index, 0, el);
//     return sorted;
//   }, []);



// function capitalise(str) {
//   str = str.split("");
//   str[0] = str[0].toUpperCase();
//   return str.join("");
// }


