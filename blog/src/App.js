import React, { useState } from "react";
import "./App.css";
import "./Style.css";

function App() {
  let [count, setCount] = useState(1);
  function updateCounter() {
    for (let i = 0; i < 5; i++) {
      setCount((pre) => pre + 1);
    }
  }

  return (
    <div className="App">
      <h1>Previous state {count}</h1>

      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
}
export default App;
