import React, { useRef } from "react";
import "./App.css";
import "./Style.css";
import User from "./User";

// import Table from "react-bootstrap/Table";

function App() {
  let inputRef = useRef("");
  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
  }
  return (
    <div className="App">
      <h1>forwardRef in React</h1>
      <User ref={inputRef} />
      <button onClick={() => updateInput()}>Update Input Box</button>
    </div>
  );
}

export default App;
