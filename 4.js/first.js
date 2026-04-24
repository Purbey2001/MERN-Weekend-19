/*
  1) Definition
  - JavaScript is a high-level, interpreted/JIT-compiled, multi-paradigm programming language.
  - It is used to make web pages interactive and to build server-side, desktop, and mobile apps.
  - JS follows the ECMAScript standard (ECMA-262).

  2) Short History
  - 1995: Brendan Eich created JavaScript at Netscape in about 10 days.
  - First names: Mocha -> LiveScript -> JavaScript.
  - 1997: JavaScript was standardized as ECMAScript.
  - Today: JS runs in browsers and outside browsers (Node.js, Deno, Bun, etc.).

  3) Where JavaScript Runs
  - Browser: Chrome (V8), Firefox (SpiderMonkey), Safari (JavaScriptCore).
  - Server: Node.js (V8 engine + libuv runtime).
  - JS engine executes code; runtime provides APIs (DOM, timers, fetch, file system, etc.).

  4) How JavaScript Runs Internally
  - JS source code -> parsing -> Abstract Syntax Tree (AST).
  - AST -> bytecode (quick executable form).
  - JIT compiler optimizes frequently used ("hot") code into machine code.
  - If assumptions fail, engine can de-optimize and run safer code again.

  5) Single-Threaded but Concurrent
  - JS main thread runs one task at a time (single call stack).
  - Concurrency is achieved using:
    - Event loop
    - Web APIs / Node APIs
    - Callback queue / task queue
    - Microtask queue (Promises, queueMicrotask)
  - Heavy work can be moved to Web Workers / Worker Threads.

  6) How JS Behaves Like Multithreaded
  - JavaScript code on the main thread is single-threaded, but runtime features make apps feel multithreaded.
  - Browser side:
    - Browser internals handle network, timers, rendering, and I/O in separate native threads/processes.
    - Web Workers run JS in separate threads (no direct DOM access).
  - Node.js side:
    - libuv uses an event loop + thread pool for file system, DNS, crypto, and some native tasks.
    - Worker Threads allow true parallel JS execution for CPU-heavy work.
  - Because background work runs outside the main call stack, UI/app remains responsive.

  7) Event Loop (Very Important)
  - Order (simplified):
    1. Run current synchronous code (call stack).
    2. Run all microtasks.
    3. Run one macrotask (timer, I/O callback, UI event).
    4. Repeat.
  - Promises run before setTimeout callbacks after current sync code completes.

  8) Synchronous vs Asynchronous
  - Synchronous: line-by-line execution; next line waits.
  - Asynchronous: long tasks (I/O, network, timers) do not block main thread.
  - Common async styles:
    - Callbacks
    - Promises
    - async/await (clean syntax over Promises)

  9) Memory Basics + Mark-and-Sweep GC
  - Stack: stores primitive values and function call frames.
  - Heap: stores objects/arrays/functions (reference types).
  - Garbage Collector (GC) automatically removes unreachable memory.
  - Most JS engines use mark-and-sweep as a core idea:
    1. Mark phase:
       - Start from root references (global object, current stack, closures).
       - Visit every object reachable from roots and mark it as "alive".
    2. Sweep phase:
       - Scan heap memory.
       - Any unmarked object is unreachable (garbage) and is reclaimed.
    3. Cleanup:
       - Marks are reset for the next GC cycle.
  - Important rule:
    - Reachable object = not collected.
    - Unreachable object = eligible for collection.
  - Cycles are handled:
    - Even if object A references B and B references A, both are collected if roots cannot reach them.

  10) Why JS Is Popular
  - Same language for frontend and backend.
  - Huge ecosystem (npm packages).
  - Fast development, large community, many job opportunities.
*/
