// let i = 0


// do {
//     console.log(i)
//     i++
// } while(i > 1)

// the do while loop first execute do then check the condition



////////////////////// For loop ///////////////////////////
// let userNumber1 = Number(prompt("Enter the first number")) //2
// let userNumber2 = Number(prompt("Enter the secound number")) //3

// //0 < 3? true => power = 1 * 2 => power = 2
// //1 < 3? true => power = 2 * 2 => power = 4
// //2 < 3? true => power = 4 * 2 => power = 8
// // 3 < 3 ? false end loop and power is 8

// let power = 1
// for (let i = 0 ; i < userNumber2 ; i++) {
//  power = power * userNumber1
// }
// alert("Power " + power)



/////////////////////// while ///////////////////////////

// let userNumber1 = Number(prompt("Enter the first number"))
// let userNumber2 = Number(prompt("Enter the secound number"))

// let i = 0

// let power = 1
// while (i < userNumber2){
//     power = power * userNumber1
//     i++
// }

// alert(power)



////////////////////////do while ////////////////////////////////

// let userNumber1 = Number(prompt("Enter the first number"));
// let userNumber2 = Number(prompt("Enter the secound number"));

// let i = 0;

// let power = 1;

// do {
//     power = power * userNumber1
//     i++
// } while(i < userNumber2)

// alert(power)



/////////////////////////////////////////////////////////////////


//jozve

// let dice1= Math.floor(Math.random() * 6 + 1) 
// let dice2= Math.floor(Math.random() * 6 + 1) 

// let roll = `you rolled a ${dice1} and ${dice2}.they sum is ${dice1 + dice2}`

// console.log(roll)




// let trafficSign = prompt("Enter Traffic sign")

// if(trafficSign === "stop"){
//     alert("red")
// }else if(trafficSign === "slow"){
//     alert("yellow")
// }else if(trafficSign === "go"){
//     alert("green")
// } else{
//     alert("purple")
// }


// let password = prompt("Enter your password")

// if(password.length > 6){
//     if(password.indexOf(" ") === -1){
//         alert("your password is strong")
//     }else{
//         alert("your password is contain empty string")
//     }
// }else{
//     alert("your password is week")
// }


let movies = ["Harry Potter", "12 angry men", 'A dog"s life', "dark coffee"];


let a = movies[0].slice(0,5)

console.log(a)
















