import "./App.css";
import Student from "./Student";
import React, { useState } from "react";

function App() {
  function Apple() {
    alert("you clicked");
  }
  let [name, setName] = useState("Mohit");
  return (
    <div className="App">
      {" "}
      <h1>Props in React :) </h1>
      <Student name={name} />
      <button
        onClick={() => {
          setName(Apple());
        }}
      >
        Click to change
      </button>
    </div>
  );
}

export default App;
