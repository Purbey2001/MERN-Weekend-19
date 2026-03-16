/*
 * HIGHER-ORDER FUNCTIONS (HOF) in JavaScript
 *
 * Definition: A higher-order function is a function that:
 * 1. Takes one or more functions as arguments (callback functions), OR
 * 2. Returns a function as its result
 *
 * This is possible because in JavaScript, functions are first-class objects
 * (can be assigned to variables, passed as arguments, returned from functions)
 *
 * Benefits of HOF:
 * - Code reusability: Write generic functions that work with different inputs
 * - Abstraction: Hide complex logic behind simple interfaces
 * - Composition: Combine multiple functions for powerful operations
 * - Functional programming: Core concept in functional programming paradigm
 *
 * Common HOF Examples in JavaScript:
 * - Array.map() - transforms each element using a callback
 * - Array.filter() - selects elements based on a callback condition
 * - Array.reduce() - accumulates values using a callback
 * - Array.forEach() - executes a callback for each element
 * - setTimeout() - takes a function to execute later
 * - Promise.then() - takes callback functions for success/failure
 */

// let arr = [1, 2, 3, 4];

// // arr.forEach(() => {});

let salary = [1000, 2000, 3000, 4000];
let salary2 = [100, 200, 400, 600];

/*
 * CALLBACK FUNCTIONS
 *
 * A callback is a function passed as an argument to another function.
 * The receiving function can then call (invoke) the callback function.
 *
 * In this example, calculateTwentyPercent and calculateThirtyPercent
 * are callback functions that will be passed to calculateTax()
 */

function calculateTwentyPercent(salary) {
  return salary * 0.2;
}

function calculateThirtyPercent(salary) {
  return salary * 0.3;
}

// Example usage: fun(salary, calculateThirtyPercent)

/*
 * HIGHER-ORDER FUNCTION EXAMPLE: calculateTax()
 *
 * This is a higher-order function because:
 * - It takes a function (cb - callback) as a parameter
 * - It applies this callback function to each element in the array
 *
 * Parameter: cb (callback function)
 * - Expected to be a function that takes a salary value
 * - Should return the calculated tax amount
 *
 * Returns: An array with transformed values (taxes calculated for each salary)
 *
 * How it works:
 * 1. Creates an empty result array
 * 2. Loops through each element in the array (using 'this')
 * 3. Calls the callback function (cb) with each element
 * 4. Stores the callback's return value in the result array
 * 5. Returns the result array with all transformed values
 *
 * This demonstrates the concept: Same function (calculateTax) works with
 * different callback functions (calculateTwentyPercent, calculateThirtyPercent)
 */
Array.prototype.calculateTax = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    // cb is the callback function being invoked with this[i] as argument
    res.push(cb(this[i]));
  }
  return res;
};

// USAGE 1: Calculate 20% tax for salary array
// Note: We pass the function itself, NOT the function call (no parentheses)
console.log(salary.calculateTax(calculateTwentyPercent));

// USAGE 2: Create a different array and calculate 20% tax for it
let arr = [3000, 4000, 5000];
let res = arr.calculateTax(calculateTwentyPercent);
console.log(res);

/*
 * COMPARISON WITH BUILT-IN HOF:
 * The native Array.map() method does the same thing as calculateTax()
 * Array.map() is also a higher-order function that takes a callback
 */
// Array.map(() => {});
