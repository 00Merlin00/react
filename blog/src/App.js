import React, { useState, useMemo } from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

function App() {
  let [count, setCount] = useState(0);
  let [item, setItem] = useState(10);

  let multiCountMemo = useMemo(
    function multiCount() {
      console.warn("multi-count");
      return count * 5;
    },
    [count]
  );
  return (
    <div className="App">
      <h1>Use Memo Hook in React</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2> {multiCountMemo}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setItem(item * 10);
        }}
      >
        Update Item
      </button>
    </div>
  );
}

export default App;
