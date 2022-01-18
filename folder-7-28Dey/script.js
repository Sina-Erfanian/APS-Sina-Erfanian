

// const airplane = [
//   ["niloofar", "kosar", "Fatemeh"],
//   ["ali", "mohsen", "Shirin"],
//   ["atena", "mahdi", "benyamin"],
//   ["bani", "mohammad", "sina"],
//   ["Amir", "Beti", "Pourya"],
// ];


// for (let i = 0 ; i< airplane.length ; i++){
//     console.log(airplane[i])
//     for (let j = 0 ; j < airplane[i].length ; j++){
//         console.log(airplane[i][j])
//     }
// }




// const arr = [12,15,26,36,32,86,33,12,64,75]


// let newArr = arr.some(ele => ele > 75)
// let newArr2 = arr.every(ele => ele > 75)

// console.log(newArr)
// console.log(newArr2)


// setTimeout((ele) => {
//     console.log("Hello")
// },5000 )


// setInterval(ele => {
//     console.log("Marg bar Kh")
// },1000)




// const name = "sina"
// const age = 19
// const hairColor = "color"
// // Variable => value variable === key object => use name variable to access value property
// const obj = {
//     [name] : "erfanian",
//     19 : "19",
//     "color" : "Black"
// }
// console.log(obj.sina)
// console.log(obj[name])
// console.log(obj[age])
// console.log(obj[hairColor])


// const {PI , E , SQRT2} = Math

// console.log(PI)
// console.log(E)
// console.log(SQRT2)


// const [first,secound,third,...rest] = [1,2,3,4,5,6]
// console.log(first);
// console.log(secound);
// console.log(third);
// console.log(rest);


// const data = {
//   temp1: "001",
//   temp2: "002",
//   firstName: "arad",
//   lastName: "hasanpour",
// };

// const {temp1 , temp2 , ...restOfobj} = data

// console.log(temp1)
// console.log(temp2)
// console.log(restOfobj)



// function rollDie(){
//     const roll = Math.floor(Math.random() * 6 ) + 1
//     console.log(roll)
// }
// function callTwice(func){
//     func()
//     func()
// }
// callTwice(rollDie)




// const myMath = {
//     square(num){
//         return num * num
//     }
// }
// console.log(myMath.square(4))



// const cat = {
//   name: "cat",
//   color: "grey",
//   breed: "persian cat",
//   meow() {
//     // console.log(`${this.color} ${this.breed} cats are amazing`)
//     const arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   },
//   thisIs: `this is ${this}`,
//   arrow: () => {
//     console.log("arrow", this);
//   },
// };

// console.log(cat.meow());

// const meow2 = cat.meow;




let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};


// let key = Object.keys(mentorsAges)

// let result = key.map(ele => ele.toUpperCase())

// console.log(result)


for (let key in mentorsAges){
    console.log(mentorsAges[key])
}

