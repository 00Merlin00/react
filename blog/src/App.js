import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div className="App">
      <h1>UseEffect in React {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;
