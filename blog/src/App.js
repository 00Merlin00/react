import "./App.css";
import Student from "./Student";
import React, { useState } from "react";

function App() {
  function getData() {
    console.log(val);
  }
  return (
    <div className="App">
      <h1>Get Input box value !</h1>
      <input type="text" onChange={getData}></input>
    </div>
  );
}

export default App;
