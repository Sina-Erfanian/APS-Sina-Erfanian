/////////////////////// object literal //////////////////

// const book1 = {
//     title : "book one",
//     author : "john doe",
//     year : 2013,
//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(book1.getSummary())
// console.log(Object.keys(book1))
// console.log(Object.values(book1))

///////////////// constructor function ///////////////////

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// why we put getSummary in prototype instead of we put them inside constructor function????
// answer : because we do want a title , author , year for every book but we are not gonna want get summary for every book

// Book.prototype.getSummary = function () {
//   console.log(`${this.title} was written by ${this.author} in ${this.year}`);
// };

// // change year
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revise = true;
//   return this;
// };

// const book1 = new Book("book one", "john doe", "2013");
// const book2 = new Book("book two", "jane doe", "2016");
// const book3 = new Book("book three", "Sina", "2020");

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book3.getSummary());

// console.log(book3);
// book3.getSummary();
// book3.revise("2022").getSummary()
// console.log(book3);

///////////////// inheritance /////////////////

// function Book (title , author , year) {
//     this.title = title
//     this.author = author
//     this.year = year
// }

// Book.prototype.getSummary = function() {
//     console.log(`${this.title} was written by ${this.author} in ${this.year}`)
// }

// function Magazine(title , author , year , month) {
//     Book.call( this, title , author , year)
//     this.month = month
// }

// // prototype magazine === prototype book
// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine("mag one", "john smith" , "1997", "jan")
// mag1.getSummary()

////////// object of protos /////////////

// the prototype method of our object
// const bookProtos = {
//   getSummary: function () {
//     console.log(`${this.title} was written by ${this.author} in ${this.year}`);
//   },
// };

// lets create our object
// book 1 is a object that we created it
// we set book 1 prototype equal to bookProtos
// const book1 = Object.create(bookProtos)
// book1.title = "book one"
// book1.author = "john doe"
// book1.year = "2018"

// another syntax
// const book1 = Object.create(bookProtos, {
//   title: { value: "book one" },
//   author: { value: "john doe" },
//   year: { value: "2010" },
// });

// console.log(book1.title);
// book1.getSummary();

////////////// class ////////////////////

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     console.log(`${this.title} was written by ${this.author} in ${this.year}`);
//   }

//   //   static topBookStore(){
//   //       console.log("barnes & noble")
//   //   }
// }

// const book1 = new Book("book one", "john doe", "2013");

// console.log(book1);
// book1.getSummary()

// class name should be use (Book)
// Book.topBookStore()

///// magazine subclass ////

// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month = month;
//   }
//   getSummaryNew() {
//     super.getSummary();
//     console.log(`on ${this.month}`);
//   }
// }

// //instance
// const mag1 = new Magazine("mag one", "jane doe", "2022", "jan");
// console.log(mag1);
// mag1.getSummaryNew();

///////////////////////////////////////////////////////////////////////////////////////////

//// function borrowing /////

// let printFullName = function (hometown) {
//     console.log(`${this.firstName} ${this.lastName} from ${hometown}`)
//     console.log(this)
// }

// const obj1 = {
//     firstName : "sina",
//     lastName : "erfanian"
// }
// const obj2 = {
//     firstName : "saeed",
//     lastName : "erfanian"
// }
// const obj3 = {
//   firstName: "ali",
//   lastName: "erfanian",
// };

// call
// printFullName.call(obj1,"mashhad")
// printFullName.call(obj2,"ahvaz")

//apply
// the only difference between call and apply is apply should be in array (just second arg)
// printFullName.apply(obj3, ["tehran"])

//bind
// the only difference between call and bind it gives you a copy which can be invoke later
// let printMyName = printFullName.bind(obj1,"mashhad")
// console.log(printMyName);
// printMyName()
