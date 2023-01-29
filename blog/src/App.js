import React, { useState } from "react";
import "./App.css";
import "./Style.css";

function App() {
  let [count, setCount] = useState(1);

  return (
    <div className="App">
      <h1>Previous state {count}</h1>

      <button>Update</button>
    </div>
  );
}
export default App;
