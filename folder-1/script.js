// if (true){
//     // var j = 0
//     // let j = 0
//     const j = 0
// }
// console.log(j)



// function func(){
//     let a = "sina"
//     const b = "erfanian"
//     var c = "sth"
// }
// // console.log(a)
// // console.log(b)
// console.log(c)



// let laptop = {
//     brand : "del",
//     ram : 8,
//     isBlack : true,
//     price : "i don't know",
//     color : ["red","green","yellow"],
//     extraAccesosires :{
//         hard : "ssd",
//         camera : 12
//     }
// }

// let whatIsBrand = laptop.brand
// let redLap = laptop.color[0]
// let ssd = laptop["extraAccesosires"]["hard"]
// // console.log(whatIsBrand)
// // console.log(redLap)
// console.log(ssd)



// const name1 = "sina"
// const name2= "ali"
// const name3= "hassan"
// const mathNum = Math.E
// const objects = {
//     [name1] : 10,
//     num2: 20,
//     hassan : 18,
//     func(){},
//     func2 :() =>{},
//     [name2] : 666,
//     mathNum,
// }
// console.log(objects.sina)
// console.log(objects.ali)
// console.log(objects[name3])
// console.log(objects.mathNum)


// const thisObj = {
//     func1 : function(){
//         console.log("this is func1", this)
//     },
//     func2 : () => console.log("this is func2",this)
// }
// console.log(thisObj.func1())
// console.log(thisObj.func2())


// const {PI , E , SQRT2} = Math

// console.log(PI)
// console.log(E)
// console.log(SQRT2)


// const names= {
//     name1: "sina",
//     name2: "ali",
//     name3 : "mamad",
//     name4: "sara"
// }

// const {name1,name2,name3,name4} = names

// console.log(name1)
// console.log(name2)
// console.log(name3)
// console.log(name4)


// const [name1 , name2, name3, ...rest] = ["sina","ali","mamad","sara","sama","saeed","zahra"]

// // console.log(name1)
// // console.log(name2)
// // console.log(name3)
// console.log(rest)

// const obj = {
//     name:"sina",
//     age : 19,
//     weight : " :) "
// }
// // let name = "name"
// console.log(obj["na" + "me"])

// const {name, ...rest} = obj
// console.log(rest)



// const obj2 = {
//     brand : "dell",
//     years : 2018,
// }
// // obj2.owner = "me"
// // obj2.brand = "apple"


// const arrayObj = [obj2,obj]
// console.log(arrayObj)



// function rolls(){
//     const roll = Math.floor(Math.random() * 6 + 1)
//     console.log(roll)
// }
// function third(element){
//     element()
//     element()
//     element()
// }

// third(rolls)



// const myMath = {
//     // power : function(pow){
//     //     return pow * pow
//     // },
//     power(pow){
//         return pow * pow
//     }
// }

// console.log(myMath.power(8))


// const fc = {
//     first: "perspolis",
//     secound : "kise :)",
//     third : "sepahan"
// }

// // console.log(Object.keys(fc))
// console.log(Object.values(fc))



// const car = {
//     peraid : "1398",
//     porshe : "2022",
//     bmw : "2021",
//     peykan : "1340"
// }

// for (let x in car){
//     console.log(`the car is ${x} and the years of car is ${car[x]}`)
// }





