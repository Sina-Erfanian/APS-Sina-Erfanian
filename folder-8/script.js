
// function rollDie(params = 6) {
//     return Math.floor(Math.random() * params) + 1
// }
// console.log(rollDie());



// const arr = [1,22,53,228,215,6,20,12,17,226]


// console.log(Math.max(...arr))
// console.log(Math.min(...arr))


// console.log([..."Hello"])


// const cats = ["Persian", "British", "Devon"]; //source code
// const dogs = ["Greyhound", "Saluki", "Retriever"];


// const allPets = cats

// allPets.push("Himalian")

// console.log(cats)



// const allPets = [...cats]

// allPets.push("Himalian")

// console.log(cats)
// console.log(allPets)


// const allPets = [...cats,...dogs,"eco"]

// console.log(allPets)



// const foxhound = { legs: 4, family: "English, American" }
// const bergamasco = { isFurry: true, family: "Persian sheepdog breed" }

// const rareDogs = {...foxhound , color: 'brown white black' }
// console.log(rareDogs)

// const rareDogs = {...foxhound , ...bergamasco}
// console.log(rareDogs)

// const rareDogs = {...foxhound , ...bergamasco , family: 'mixed'}
// console.log(rareDogs)



// console.log({...[1,2,3]})
// console.log({...'hello'})
// console.log({...['hello']})  // '0' : "hello"



// const userData = {
//   id : 1,
//   name : "sina",
//   family: "erfanian",
//   age : 19
// };

// const updateUser = {
//   ...userData,
//   id: "_1234",
//   isAdmin: false,
//   email: "sina@gmail.com",
// };

// console.log(updateUser);




// function plus(...params){ //[1,2,425,3].reduce
//     console.log(params);
//     console.log(params.reduce((acc, cur) => acc + cur));
// }

// plus(1,2,425,3)



// function raceResults(gold, silver, ...others ) {
//   console.log(`gold medal goes to: ${gold}`)
//   console.log(`silver medal goes to: ${silver}`)
//   console.log(`Thanks to ${others}`)
//   console.log(others)
// }

// raceResults("Schumacher")
// raceResults("Schumacher", "Hamilton")
// raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button") 



// function raceResults2 (...others) {
//   const [gold , siver , ...otherParticipators] = others
//   console.log(`gold medal goes to: ${gold}`)
//   console.log(`silver medal goes to: ${siver}`)
//   console.log(`Thanks to: ${otherParticipators}`)
// }
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")


//  const raceResults2 =  (...others) => {
//   others.push('jasem')
//   console.log(others)
  
// }
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")



// const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// const highScore = scores[0]
// const secondHighScore = scores[1]

// const [gold , silver , bronze , ...others] = scores 
// // gold = 10 ,, silver = 9 ,, bronz = 8 ,, ...others = [7,6,5,4,3,2,1,0]
// console.log(gold)
// console.log(silver)
// console.log(bronze)
// console.log(others)


// const [ten,nine,eight,...sevenToZero] = scores

// console.log(sevenToZero)



 const userData = {
  id : 1,
  name : "sina",
  family: "erfanian",
  age : 19
};


// const {id, name , age : sen} = userData

// console.log(`your name is ${name} and your id is ${id} and your age is ${sen}`)
// console.log(userData)


// function func(name , family) {
//     return `the name is ${name.name} and the family is ${family.family}`
// }
// console.log(func(userData));


// function func( {name , family}) {
//     return `the name is ${name} and the family is ${family}`
// }
// console.log(func(userData));



const categories = [
  {
    color: "#f3c32c",
    name: "Housing",
    score_out_of_10: 1,
  },
  {
    color: "#f3d630",
    name: "Cost of Living",
    score_out_of_10: 2.618,
  },
  {
    color: "#f4eb33",
    name: "Startups",
    score_out_of_10: 10,
  },
  {
    color: "#d2ed31",
    name: "Venture Capital",
    score_out_of_10: 10,
  },
  {
    color: "#7adc29",
    name: "Travel Connectivity",
    score_out_of_10: 3.6545000000000005,
  },
  {
    color: "#36cc24",
    name: "Commute",
    score_out_of_10: 4.687250000000001,
  },
  {
    color: "#19ad51",
    name: "Business Freedom",
    score_out_of_10: 8.671,
  },
  {
    color: "#0d6999",
    name: "Safety",
    score_out_of_10: 5.7155000000000005,
  },
  {
    color: "#051fa5",
    name: "Healthcare",
    score_out_of_10: 6.448999999999999,
  },
  {
    color: "#150e78",
    name: "Education",
    score_out_of_10: 8.6245,
  },
  {
    color: "#3d14a4",
    name: "Environmental Quality",
    score_out_of_10: 6.4815000000000005,
  },
  {
    color: "#5c14a1",
    name: "Economy",
    score_out_of_10: 6.5145,
  },
  {
    color: "#88149f",
    name: "Taxation",
    score_out_of_10: 4.488,
  },
  {
    color: "#b9117d",
    name: "Internet Access",
    score_out_of_10: 5.605500000000001,
  },
  {
    color: "#d10d54",
    name: "Leisure & Culture",
    score_out_of_10: 9.407,
  },
  {
    color: "#e70c26",
    name: "Tolerance",
    score_out_of_10: 8.012500000000001,
  },
  {
    color: "#f1351b",
    name: "Outdoors",
    score_out_of_10: 7.014,
  },
]

// console.log(categories.filter(category => category.score_out_of_10 >= 9))
// const result = categories.filter( ({score_out_of_10}) => score_out_of_10 >= 9)
// console.log(result)



// const mapRes = categories.map( category => {
//   return category.score_out_of_10 >= 9
// })
// console.log(mapRes)

// const result2 = categories.map(category => {
//   return (`${category.name} is rated ${category.score_out_of_10}`)
// })

// console.log(result2)

// const result = categories.map( ({name , color}) => `the name is ${name} and the color is ${color}`)
// console.log(result)

// const result3 = categories.map(( { name , score_out_of_10 } ) => {
//   return (`${name} is rated ${score_out_of_10}`)
// })

// console.log(result3)



// console.dir(document)


// const image = document.getElementsByTagName("img")

// for (let imgTag of image){
//     imgTag.src = "//unsplash.it/500"
// }

// console.dir(image)


// const link = document.querySelector(".a2")
// console.log(link)
