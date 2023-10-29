/* 
Filename: ComplexCode.js
Content: A complex JavaScript code example
*/

// Define a class named Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  static sayHi() {
    console.log('Hi there!');
  }
}

// Define a subclass of Person named Employee
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  introduce() {
    console.log(`I'm ${this.name}, ${this.position} at this company.`);
  }
}

// Create a new instance of Employee
const john = new Employee('John Doe', 35, 'Manager');
john.greet();
john.introduce();
Employee.sayHi();

// Define an asynchronous function
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

fetchData();

// Define a generator function
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

// Print the first 10 Fibonacci numbers
const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Define a higher-order function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

// Create a function that multiplies by 5
const multiplyBy5 = multiplyBy(5);
console.log(multiplyBy5(10));

// Define a closure
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Define a recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Define an event listener
document.getElementById('myButton').addEventListener('click', function () {
  console.log('Button clicked!');
});

// Implement a debounce function
function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

// Usage example:
function saveData() {
  console.log('Data saved.');
}

const debouncedSave = debounce(saveData, 1000);
// The saveData function will be called only if no more function calls occur within 1 second
document.getElementById('myInput').addEventListener('input', debouncedSave);

// ... continue with complex code logic ...