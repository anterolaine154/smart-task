/* 
   Filename: advanced_web_app.js
   Content: Advanced web application with complex functionality and interactivity
*/

// Define a class for creating Person objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Define utility functions
function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

// Create a web page with interactive buttons
const body = document.getElementsByTagName("body")[0];

const heading = document.createElement("h1");
heading.innerHTML = "Welcome to Advanced Web Application";
body.appendChild(heading);

const button1 = document.createElement("button");
button1.innerHTML = "Click to greet John";
button1.addEventListener("click", () => person1.greet());
body.appendChild(button1);

const button2 = document.createElement("button");
button2.innerHTML = "Click to greet Jane";
button2.addEventListener("click", () => person2.greet());
body.appendChild(button2);

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const addBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");
const result = document.createElement("p");

input1.type = "number";
input2.type = "number";
addBtn.innerHTML = "Add";
multiplyBtn.innerHTML = "Multiply";

addBtn.addEventListener("click", () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.innerHTML = `Result: ${addNumbers(num1, num2)}`;
});

multiplyBtn.addEventListener("click", () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.innerHTML = `Result: ${multiplyNumbers(num1, num2)}`;
});

body.appendChild(input1);
body.appendChild(input2);
body.appendChild(addBtn);
body.appendChild(multiplyBtn);
body.appendChild(result);

// More complex logic and data manipulation

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers from the array
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Map each number to its square
const squaredNumbers = evenNumbers.map((num) => num ** 2);

// Reduce the squared numbers to a single sum
const sum = squaredNumbers.reduce((acc, num) => acc + num, 0);

console.log(`Sum of squared even numbers: ${sum}`);

// Fetch data from an API and perform calculations
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    const apiData = data;
    let total = 0;

    for (let i = 0; i < apiData.length; i++) {
      if (apiData[i].category === "fruit") {
        total += apiData[i].price * apiData[i].quantity;
      }
    }

    console.log(`Total fruit cost: ${total}`);
  })
  .catch((error) => console.log(`Error fetching data: ${error}`));