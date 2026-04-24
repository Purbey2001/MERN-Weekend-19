import React from "react";
import { useMemo, useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }
  function someone() {
    console.log("sum fun called");
    let sum = 0;

    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }

  function sayHi() {
    console.log("sayhi");
  }

  let sayhi1 = useCallback(() => sayHi, []);

  // let res = sum();
  let res = useMemo(() => someone(), []);
  return (
    <div>
      <h1>the result of sum is:{res}</h1>
      <h1>the value of count in parent:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <br></br> <br></br>
      <button onClick={handleClick2}>Increase for child</button>
      <h2>count in child:{count2}</h2>
      <br></br>
      <Child count2={count2} sayHi={sayhi1} />
    </div>
  );
};

export default App;
