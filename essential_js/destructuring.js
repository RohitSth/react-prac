// destructuring = extract values from arrays and objects then assign them to variables in a convenient way

// for arrays = []
// for objects = {}

// Array destructuring

// ----------------------------------------------

// swap val of 2 var

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1

// ----------------------------------------------
// swap 2 elements in an array

// const colors = ["red", "blue", "green", "while", "black"];

// [colors[0], colors[3]] = [colors[3], colors[0]];

// console.log(colors); // ["white", "blue", "green", "red", "black"]

// ----------------------------------------------

// assign array elements to variables

// const colors = ["red", "blue", "green", "while", "black"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor); // red
// console.log(secondColor); // blue
// console.log(thirdColor); // green
// console.log(extraColors); // ["while", "black"]

// ----------------------------------------------

// Object destructuring

// extract values from objects

// const p1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   job: "developer",
// };

// const p2 = {
//   firstName: "Cena",
//   lastName: "Oay",
//   age: 30,
// };

// const { firstName, lastName, age, job } = p1;

// console.log(firstName); // John
// console.log(lastName); // Doe
// console.log(age); // 50
// console.log(job); // developer

// const { firstName, lastName, age, job = "unemployed" } = p2;
// console.log(firstName); // Cena
// console.log(lastName); // Oay
// console.log(age); // 30
// console.log(job); // unemployed

// ----------------------------------------------

// destructuring in function parameters

function display({ firstName, lastName, age, job = "unemployed" }) {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(job);
}

const p1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  job: "developer",
};

const p2 = {
  firstName: "Cena",
  lastName: "Oay",
  age: 30,
};

display(p1);
console.log("-----------");
display(p2);
