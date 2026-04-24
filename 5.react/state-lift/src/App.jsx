import React from "react";
import Child from "./Child";
import { useState } from "react";
import Child2 from "./Child2";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Child name={name} setName={setName} />
      <h1>the data coming from child is :{name}</h1>
      <Child2 name={name} />
    </div>
  );
};

export default App;
