/*

1) JS datatypes are mainly divided into:
   A) Primitive types (simple, immutable values)
   B) Non-primitive / reference types (objects)

2) Primitive types in JavaScript:
   - Number      -> 10, 3.14, -25, NaN, Infinity
   - String      -> "hello", 'world', `template`
   - Boolean     -> true, false
   - Undefined   -> variable declared but value not assigned
   - Null        -> intentional empty value
   - BigInt      -> very large integers (example: 123n)
   - Symbol      -> unique identifiers

3) Non-primitive / reference types:
   - Object      -> { key: value }
   - Array       -> [1, 2, 3]
   - Function    -> function x() {}
   - Date, Map, Set, etc. are also object types

------------------------------------------------------------
MEMORY MODEL IN JS (CONCEPTUAL)
------------------------------------------------------------

JavaScript engine uses memory areas conceptually like:

1) Stack Memory:
   - Stores primitive values directly (or very small fixed-size data).
   - Fast access.
   - Also stores references (addresses/pointers) to heap objects.
   - Works in LIFO style for function calls (call stack).

2) Heap Memory:
   - Stores objects/arrays/functions (dynamic size data).
   - Slower than stack access but flexible for large, dynamic structures.
   - Managed by garbage collector (automatic memory cleanup).

IMPORTANT:
- In interview/class explanation:
  Primitive values are usually taught as "stack stored".
  Reference values are taught as "heap stored, reference on stack".
- Actual engine implementation can vary, but this model is correct for learning.

------------------------------------------------------------
COPY BEHAVIOR: PRIMITIVE vs REFERENCE
------------------------------------------------------------

Primitive copy -> VALUE copy (independent variables)
Reference copy -> ADDRESS copy (both variables point to same object)

*/

// -------------------------
// Primitive example (value copy)
// -------------------------
// let a = 10;
// let b = a; // b gets a copy of value 10
// b = 40;
// console.log(a); // 10 (unchanged)
// console.log(b); // 40

// -------------------------
// Reference example (address copy)
// -------------------------
// let obj1 = { fname: "vikas" };
// let obj2 = obj1; // both point to same object in heap
// obj2.fname = "aman";
// console.log(obj1.fname); // "aman" (changed, shared reference)
// console.log(obj2.fname); // "aman"

// -------------------------
// Deep copy example (independent object)
// -------------------------
// let user1 = { fname: "vikas", skills: ["js", "node"] };
// let user2 = structuredClone(user1); // deep copy
// user2.fname = "aman";
// user2.skills.push("react");
// console.log(user1); // remains unchanged
// console.log(user2); // changed copy

// ------------------------------------------------------------
// QUICK typeof NOTES
// ------------------------------------------------------------
// typeof 123           -> "number"
// typeof "hello"       -> "string"
// typeof true          -> "boolean"
// typeof undefined     -> "undefined"
// typeof 123n          -> "bigint"
// typeof Symbol("id")  -> "symbol"
// typeof { a: 1 }      -> "object"
// typeof [1, 2, 3]     -> "object"
// typeof function (){} -> "function"
// typeof null          -> "object"   <-- historical JS bug, remember this!

/*
Student Summary:
1) Primitive = copied by value.
2) Object/Array/Function = copied by reference.
3) Stack is for quick local data/call frames; heap is for dynamic reference data.
4) Use cloning (shallow/deep) when you want separate object copies.
*/
