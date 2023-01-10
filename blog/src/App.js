import React, { useRef } from "react";
import "./App.css";
import "./Style.css";

// import Table from "react-bootstrap/Table";

function App() {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("func called");
    inputRef.current.value = "1000";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>useRef in React</h1>
      <input type={"text"} ref={inputRef}></input>
      <button onClick={() => handleInput()}>click</button>
    </div>
  );
}

export default App;
