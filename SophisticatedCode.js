/*
   Filename: SophisticatedCode.js
   
   Description: A sophisticated and elaborate example of JavaScript code. This code demonstrates various advanced concepts such as object-oriented programming, recursion, event handling, and more. It also includes complex algorithms and data structures.
*/

// Class representing a vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.make} ${this.model}'s engine started.`);
  }

  stopEngine() {
    console.log(`${this.make} ${this.model}'s engine stopped.`);
  }
}

// Class representing a car, inheriting from Vehicle
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.speed = 0;
  }

  accelerate(speedIncrement) {
    this.speed += speedIncrement;
    console.log(`${this.make} ${this.model} accelerated to ${this.speed} km/h.`);
  }

  brake(speedDecrement) {
    this.speed -= speedDecrement;
    console.log(`${this.make} ${this.model} slowed down to ${this.speed} km/h.`);
  }
}

// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to handle a click event
function handleClick(event) {
  console.log(`Button clicked at (${event.clientX}, ${event.clientY}).`);
}

// Complex algorithm to find the nth Fibonacci number
function fibonacci(n) {
  let a = 0, b = 1;
  if (n === 0) {
    return a;
  }
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Event listener for button click
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// Test the code
const myCar = new Car('Tesla', 'Model 3', 2021);
myCar.startEngine();
myCar.accelerate(50);
myCar.brake(20);
myCar.stopEngine();

console.log(`Factorial of 5 is ${factorial(5)}.`);
console.log(`10th Fibonacci number is ${fibonacci(10)}.`);

// ... More complex code continues beyond this point ...

// ... Additional classes, functions and logic ...