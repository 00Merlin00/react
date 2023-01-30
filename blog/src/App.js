import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import User from "./Uses";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <User count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
        Update Counter
      </button>
    </div>
  );
}
export default App;
