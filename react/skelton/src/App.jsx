import React from "react";
import Card from "./Card";
import Skelton from "./Skelton";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return loading ? <Skelton /> : <Card />;
};

export default App;
