// class Rectangle{
//     constructor(_x,_y,_color){
//         this.x = _x
//         this.y = _y
//         this.color = _color
//     }

//     getArea(){
//         return this.x * this.y
//     }

//     printDescription(){
//         return `this rectangle is ${this.getArea()} and ${this.color}`
//     }

// }

// const rectangle1 = new Rectangle(50,33,"red")
// const rectangle2 = new Rectangle(35,50,"blue")
// // console.log(rectangle1);
// // console.log(rectangle1.getArea());
// // console.log(rectangle2);
// // console.log(rectangle2.getArea());

// console.log(rectangle2.printDescription());

// const person = {
//     name : "sina",
//     lastName : "erfanian",
//     get fullName(){
//         return `${this.name} ${this.lastName}`
//     },
//     set fullName(value){
//         const arr = value.split(" ")
//         this.name = arr[0]
//         this.lastName = arr[1]
//     }
// }

// console.log(person.fullName);
// person.fullName = "ali erfanian"
// console.log(person.fullName);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log("sth");
    return `${this.name} ${this.age}`;
  }
}

const person1 = new Person("sina", 19);
console.log(person1);

class Programmer extends Person {
  constructor(name, age, expert) {
    super(name, age);
    this.expert = expert;
  }
  introduce() {
    super.introduce();
    return `${this.name} ${this.age} ${this.expert}`;
  }
}

const programmer1 = new Programmer("sina", 19, "Front-End");
console.log(programmer1);
console.log(programmer1.introduce());
