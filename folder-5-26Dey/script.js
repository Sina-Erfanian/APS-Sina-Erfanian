
// let arr = [] // [12,14,16] len = 3 // arr[0]=  12 // arr[1] = 14 // arr[2]=16
// let sum = 0 // 12 + 0 =12 // 14 + 12 = 26 // 16 + 26 = 42 // 42 / 3
// let userNumber = 0

// while(userNumber != -1){
//     userNumber = Number(prompt("Enter your number \n press -1 if dont want to continue"))
//     if (userNumber != -1){
//         arr.push(userNumber)
//     }
// }

// for (let i = 0; i < arr.length ; i++){
// sum += arr[i]
// }
// alert(sum / arr.length)







let userInfo = [
  {
    id : 1,
    name: "sina",
    family: "erfanian",
    age: 19,
    email: "sina@gmail.com",
  },
  {
    id : 2,
    name: "sara",
    family: "mohammadi",
    age: 29,
    email: "sara@gmail.com",
  },
  {
    id : 3,
    name: "ali",
    family: "shakeri",
    age: 16,
    email: "ali@gmail.com",
  }
];



let UserName = prompt("Enter your name")
let UserFamily = prompt("Enter your family name")
let UserAge = prompt("Enter your Age")
let UserEmail = prompt("Enter your Email")


if (UserName < 3 || UserName > 10){
    alert("your username should contain at least 3 and maximum 10")
} else if(UserFamily < 3 || UserFamily > 15){
    alert("your family name should contain at least 3 and maximum 15")
} else if (isNaN(UserAge) || UserAge.length > 3){
    alert("please Enter your age corectly")
} else{
    let newUser = {
        id : 4,
        name : UserName,
        family : UserFamily,
        age : UserAge,
        email : UserEmail
    }
    userInfo.push(newUser)
    console.log(userInfo)
}