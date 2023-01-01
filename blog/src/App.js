import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count {count}
      </button>
    </div>
  );
}

export default App;
