/*
============================================================
JAVASCRIPT VARIABLES - STUDENT NOTES
============================================================

A variable is a named container used to store data.
In JS, we declare variables using:
1) var
2) let
3) const

------------------------------------------------------------
1) var (old way, avoid in modern code)
------------------------------------------------------------
- Function-scoped (NOT block-scoped)
- Can be redeclared in same scope
- Can be reassigned
- Hoisted and initialized with undefined

Example:
// console.log(x); // undefined (hoisted)
// var x = 10;
// var x = 20;      // allowed
// x = 30;          // allowed

Problem with var:
- It ignores block scope, which can cause bugs.

Example:
// if (true) {
//   var score = 50;
// }
// console.log(score); // 50 (still accessible outside block)

------------------------------------------------------------
2) let (recommended for changing values)
------------------------------------------------------------
- Block-scoped
- Cannot be redeclared in same scope
- Can be reassigned
- Hoisted but in TDZ (Temporal Dead Zone), so cannot use before declaration

Example:
// let count = 1;
// count = 2; // allowed
// let count = 3; // Error: cannot redeclare in same scope

Block scope:
// {
//   let city = "Delhi";
// }
// console.log(city); // Error: city is not defined

TDZ example:
// console.log(age); // Error (cannot access before initialization)
// let age = 21;

------------------------------------------------------------
3) const (recommended for fixed binding)
------------------------------------------------------------
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized at declaration time

Example:
// const pi = 3.14;
// pi = 3.14159; // Error

Important for objects/arrays:
- const prevents reassignment of variable binding,
  but object/array contents can still be changed.

Example:
// const user = { name: "Vikas" };
// user.name = "Aman"; // allowed (mutating object content)
// user = {};          // Error (reassignment not allowed)

------------------------------------------------------------
VAR vs LET vs CONST (Quick Comparison)
------------------------------------------------------------
var:
- scope: function
- redeclare: yes
- reassign: yes
- hoisting use before declaration: yes (undefined)

let:
- scope: block
- redeclare: no (same scope)
- reassign: yes
- hoisting use before declaration: no (TDZ error)

const:
- scope: block
- redeclare: no
- reassign: no
- hoisting use before declaration: no (TDZ error)

------------------------------------------------------------
HOISTING NOTES
------------------------------------------------------------
Hoisting means declarations are moved to top of their scope during compile phase.

- var is hoisted with value undefined.
- let/const are hoisted too, but stay in TDZ until line of declaration.
- function declarations are fully hoisted.

Example:
// greet(); // works
// function greet() {
//   console.log("Hello");
// }

------------------------------------------------------------
BEST PRACTICE (MODERN JS)
------------------------------------------------------------
1) Use const by default.
2) Use let only when value needs to change.
3) Avoid var in new code.
4) Keep variable scope as small as possible.
5) Use meaningful variable names.

*/

// Practice snippet (uncomment and run)
// const course = "JavaScript";
// let lessons = 10;
// lessons++;
// console.log(course, lessons);
