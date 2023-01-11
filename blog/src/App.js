import React, { useState } from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

function App() {
  let [val, setVal] = useState("");
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input
        type={"text"}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <h3>{val}</h3>
    </div>
  );
}

export default App;
