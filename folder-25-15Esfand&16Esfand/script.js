// // console.log(process.argv)

// let argv = process.argv

// // console.log(argv)

// for (let arg of argv){
//     console.log(`path : ${arg}`)
// }

// let sum = (x,y)=> console.log(x + y);

// let PI = 3.14

// let minus = (x,y) => console.log(x - y);

// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.minus = minus

// console.log(module)

const fs = require("fs");

// console.log(fs);

// fs.mkdir("test", {recursive : true}, (err)=> {
//     if(err) {
//         console.log("error dary golam")
//         throw err
//     }
// })

// fs.mkdirSync("test-2")

// let name = "project"

// fs.mkdirSync(name, {recursive : true})

// fs.writeFileSync(`${name}/index.html`,"<html></html>")
// fs.writeFileSync(`${name}/style.css`,"*{padding : 0}")
// fs.writeFileSync(`${name}/script.js`,"console.log()")

var giveMeAJoke = require("give-me-a-joke");
var colors = require("colors");
const snakeNames = require("snake-names");
const Joke = require("awesome-dev-jokes");

console.log(Joke.getRandomJoke().red);

// let get = snakeNames.random();
// console.log(get);

// giveMeAJoke.getRandomDadJoke(function (joke) {
//   console.log(joke.underline.red);
// });
