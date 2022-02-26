// function Student(){
//     this.name = "sina",
//     this.gender = "male"
// }

// Student.prototype.age = 19

// let obj1 = new Student()
// console.log(obj1.age)

// let obj2 = new Student();
// console.log(obj2);

// String.prototype.groot = (name) => alert(`Hi ${name}`)

// let cat = "pishi"
// let dog = "hapoo"

// console.log(cat);

// console.log(cat.groot("sth"));
// console.log(dog.groot("sth2"));

// function makeUser(name, email, phone) {
//   return {
//     name,
//     email,
//     phone,
//     loggedIn() {
//       console.log(` ${this.name} has logged In`);
//     },
//     loggedOut() {
//       console.log(` ${this.name} has logged out`);
//     },
//   };
// }


// const user1 = makeUser("sina","sina@gmail.com",0939)
// const user2 = makeUser("sara","sara@gmail.com",0903)
// console.log(user1);
// console.log(user2);

// user1.loggedIn()
// user2.loggedOut()





// function Color(r,g,b){
// this.red = r
// this.green = g
// this.blue = b
// }

// Color.prototype.rgb =  function() {
//     const {red , green , blue} = this
//     return `rgb(${red},${green},${blue})`
// }

// const colorOne = new Color("155","155","155")
// console.log(colorOne)



function User(name , age , email){
    this.username = name
    this.age = age
    this.email = email
}

User.prototype.sayHello = function(){
    const {username , email} = this
    return `Hello ${username} - ${email}`
}

const user1 = new User("sina",19,"sina@gmail.com")
const user2 = new User("sara",17,"sara@gmail.com")
const user3 = new User("sama",29,"sama@gmail.com")

console.log(user1);
console.log(user1.sayHello());
console.log(user2);
console.log(user3);





